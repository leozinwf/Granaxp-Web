import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar } from 'lucide-react';

export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const supabase = await createClient();

  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single();

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-20 min-h-screen">
      <Link href="/blog" className="inline-flex items-center gap-2 text-dark-texto hover:text-roxo-claro transition-colors mb-12">
        <ArrowLeft size={20} /> Voltar para o blog
      </Link>

      <header className="mb-12 border-b border-dark-borda pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-roxo-claro font-medium text-sm mb-8">
          <Calendar size={16} />
          Publicado em {new Date(post.created_at).toLocaleDateString('pt-BR')}
        </div>

        {/* Exibição da Imagem de Capa vinda do Supabase */}
        {post.image_url && (
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 border border-dark-borda shadow-xl">
            <Image 
              src={post.image_url} 
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </header>

      {/* Renderização Mágica do HTML gerado pelo React Quill */}
      <div 
        className="prose prose-invert prose-purple max-w-none text-slate-200 text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}