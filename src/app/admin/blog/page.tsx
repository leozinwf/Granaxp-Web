'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { apagarPost } from './actions';

export default function BlogAdmin() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function loadPosts() {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (data) setPosts(data);
      setLoading(false);
    }
    loadPosts();
  }, [supabase]);

  async function handleDelete(id: string) {
    if (confirm('Tem a certeza que deseja apagar esta publicação? Esta ação é irreversível.')) {
      const result = await apagarPost(id);
      if (result.success) {
        setPosts(posts.filter(p => p.id !== id));
        router.refresh();
      }
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Cabeçalho com o botão de Criar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-100">Publicações do Blog</h1>
        <Link 
          href="/admin/blog/novo" 
          className="bg-roxo-claro hover:bg-roxo-hover text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(130,10,209,0.3)]"
        >
          <Plus size={20} />
          Novo Post
        </Link>
      </div>

      {/* Tabela de Posts */}
      <div className="bg-dark-card border border-dark-borda rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="p-12 text-center text-dark-texto">Carregando...</div>
        ) : posts && posts.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-dark-borda bg-dark-fundo/50 text-dark-texto text-sm">
                <th className="p-4 font-medium">Título</th>
                <th className="p-4 font-medium">Estado</th>
                <th className="p-4 font-medium">Data</th>
                <th className="p-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-dark-borda/50 hover:bg-dark-fundo/30 transition-colors">
                  <td className="p-4 font-medium text-slate-200">{post.title}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${post.published ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'}`}>
                      {post.published ? 'Publicado' : 'Rascunho'}
                    </span>
                  </td>
                  <td className="p-4 text-dark-texto text-sm">
                    {new Date(post.created_at).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="p-4 flex justify-end gap-3">
                    {/* Botão Editar */}
                    <Link 
                      href={`/admin/blog/editar/${post.id}`}
                      className="text-dark-texto hover:text-roxo-claro transition-colors p-2 hover:bg-dark-borda rounded-lg" 
                      title="Editar"
                    >
                      <Edit size={18} />
                    </Link>
                    
                    {/* Botão Apagar */}
                    <button 
                      onClick={() => handleDelete(post.id)}
                      className="text-dark-texto hover:text-red-400 transition-colors p-2 hover:bg-dark-borda rounded-lg" 
                      title="Apagar"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-12 text-center text-dark-texto">
            Nenhuma publicação encontrada. Clique em "Novo Post" para começar!
          </div>
        )}
      </div>
    </div>
  );
}