import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Calendar, ArrowRight } from 'lucide-react';

// Força a página a buscar dados novos do Supabase a cada 1 hora (ISR)
export const revalidate = 3600;

export default async function BlogPublico() {
  const supabase = await createClient();
  
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Cabeçalho */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-4 tracking-tight">
          Blog <span className="text-roxo-claro">Grana XP</span>
        </h1>
        <p className="text-dark-texto text-lg max-w-2xl mx-auto">
          Dicas de finanças, guias de organização e atualizações para você dominar o seu dinheiro e subir de nível.
        </p>
      </div>

      {/* Grid de Artigos */}
      {posts && posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="bg-dark-card border border-dark-borda/60 rounded-2xl overflow-hidden hover:border-roxo-claro/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Imagem de Capa */}
              <div className="h-48 w-full bg-dark-fundo relative overflow-hidden border-b border-dark-borda/40">
                {post.image_url ? (
                  <img 
                    src={post.image_url} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-dark-borda font-bold text-xl">
                    Grana XP
                  </div>
                )}
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-dark-texto mb-3">
                  <Calendar size={14} />
                  <span>{new Date(post.created_at).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-100 mb-3 line-clamp-2 group-hover:text-roxo-claro transition-colors">
                  {post.title}
                </h2>

                <p className="text-dark-texto text-sm mb-6 line-clamp-3 flex-1 leading-relaxed">
                  {post.excerpt || 'Clique para ler o artigo completo sobre finanças e organização no Grana XP.'}
                </p>

                <Link 
                  href={`/blog/${post.slug || post.id}`}
                  className="inline-flex items-center gap-2 text-roxo-claro font-bold text-sm group/btn hover:text-white transition-colors"
                >
                  Ler artigo completo
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-dark-card border border-dark-borda rounded-2xl">
          <p className="text-dark-texto text-lg">Nenhum artigo publicado por aqui ainda. Volte em breve!</p>
        </div>
      )}
    </div>
  );
}