'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

// dynamic returns a component with unknown props which can cause TS errors
// when passing ReactQuill-specific props. Cast to any to satisfy the compiler.
const ReactQuill: any = dynamic(() => import('react-quill-new'), { ssr: false }) as any;

export default function EditarPost({ params }: { params: Promise<{ id: string }> }) {
  const [post, setPost] = useState<any>(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();
  const unwrappedParams = use(params);

  useEffect(() => {
    async function loadPost() {
      const { data } = await supabase.from('posts').select('*').eq('id', unwrappedParams.id).single();
      if (data) {
        setPost(data);
        setContent(data.content);
      }
      setLoading(false);
    }
    loadPost();
  }, [unwrappedParams.id, supabase]);

  async function updatePost(formData: FormData) {
    const imageFile = formData.get('image') as File;
    let image_url = post.image_url;

    // Se o usuário selecionou uma nova imagem, fazemos o upload
    if (imageFile && imageFile.size > 0) {
      const fileName = `${post.slug}-${Date.now()}`;
      
      // PROTEÇÃO: Só remove a antiga se post.image_url existir
      if (post.image_url) {
        const oldImageName = post.image_url.split('/').pop();
        if (oldImageName) {
            await supabase.storage.from('blog-images').remove([oldImageName]);
        }
      }
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(fileName, imageFile);
        
      if (!uploadError) {
        const { data: publicUrlData } = supabase.storage.from('blog-images').getPublicUrl(fileName);
        image_url = publicUrlData.publicUrl;
      }
    }

    const { error } = await supabase
      .from('posts')
      .update({
        title: formData.get('title'),
        excerpt: formData.get('excerpt'),
        content: content,
        published: formData.get('published') === 'true',
        image_url: image_url,
      })
      .eq('id', unwrappedParams.id);

    if (!error) router.push('/admin/blog');
  }

  if (loading) return <div className="p-8 text-slate-400">Carregando editor...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blog" className="text-dark-texto hover:text-roxo-claro transition-colors"><ArrowLeft size={24} /></Link>
        <h1 className="text-3xl font-bold text-slate-100">Editar Publicação</h1>
      </div>

      <form action={updatePost} className="space-y-6 bg-dark-card border border-dark-borda p-8 rounded-2xl shadow-xl">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-dark-texto mb-2">Título do Artigo</label>
          <input id="title" name="title" title="Título do artigo" placeholder="Digite o título do artigo" defaultValue={post.title} required className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100" />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-dark-texto mb-2 flex items-center gap-2">
            <ImageIcon size={16} /> Trocar Imagem de Capa
          </label>
          {post.image_url && <img src={post.image_url} alt="Capa atual" className="h-32 mb-4 rounded-xl border border-dark-borda"/>}
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            title="Selecione uma imagem de capa"
            className="w-full text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:bg-roxo-claro/20 file:text-roxo-claro file:border-0"
          />
        </div>

        <div>
          <label htmlFor="excerpt" className="block text-sm font-medium text-dark-texto mb-2">Resumo</label>
          <textarea id="excerpt" name="excerpt" title="Resumo do artigo" placeholder="Escreva um breve resumo (máx. 200 caracteres)" defaultValue={post.excerpt} rows={2} className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-texto mb-2">Conteúdo</label>
          <div className="bg-slate-50 text-slate-900 rounded-xl overflow-hidden">
            <ReactQuill 
              value={content}
              onChange={setContent}
              modules={{ toolbar: true }}
              style={{ height: '256px', marginBottom: '48px' }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" name="published" value="true" defaultChecked={post.published} id="published" className="w-5 h-5 rounded bg-dark-fundo border-dark-borda text-roxo-claro"/>
          <label htmlFor="published" className="text-slate-200 font-medium cursor-pointer">Publicado</label>
        </div>

        <div className="pt-4 border-t border-dark-borda flex justify-end">
          <button type="submit" className="bg-roxo-claro hover:bg-roxo-hover text-white px-8 py-3 rounded-xl font-bold">
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
}