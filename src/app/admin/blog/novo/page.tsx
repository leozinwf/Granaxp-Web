'use client';

import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import { criarPost } from '../actions';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function NovoPost() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': [2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'blockquote', 'code-block'],
      ['clean']
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/blog" className="text-dark-texto hover:text-roxo-claro transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-3xl font-bold text-slate-100">Criar Nova Publicação</h1>
      </div>

      {/* Ao submeter, usamos o formData e chamamos a Server Action */}
      <form 
        action={async (formData) => {
          setLoading(true);
          formData.append('content', content);
          await criarPost(formData);
        }} 
        className="space-y-6 bg-dark-card border border-dark-borda p-8 rounded-2xl shadow-xl"
      >
        
        <div>
          <label className="block text-sm font-medium text-dark-texto mb-2">Título do Artigo</label>
          <input type="text" name="title" required title="Título do Artigo" placeholder="Digite o título do artigo" className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 focus:border-roxo-claro focus:ring-1 focus:ring-roxo-claro outline-none transition-all"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-texto mb-2 flex items-center gap-2">
            <ImageIcon size={16} /> Imagem de Capa
          </label>
          <input type="file" name="image" accept="image/*" title="Imagem de Capa" className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-roxo-claro/20 file:text-roxo-claro hover:file:bg-roxo-claro/30 transition-all"/>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-texto mb-2">Resumo</label>
          <textarea name="excerpt" rows={2} title="Resumo" placeholder="Escreva um breve resumo do artigo" className="w-full px-4 py-3 rounded-xl bg-dark-fundo border border-dark-borda text-slate-100 focus:border-roxo-claro focus:ring-1 focus:ring-roxo-claro outline-none resize-none"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-dark-texto mb-2">Conteúdo do Artigo</label>
          <div className="bg-slate-50 text-slate-900 rounded-xl overflow-hidden">
            <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} className="h-64 mb-12" />
          </div>
        </div>

        <div className="flex items-center gap-3 py-2 mt-8">
          <input type="checkbox" name="published" value="true" id="published" title="Publicar imediatamente" className="w-5 h-5 rounded bg-dark-fundo border-dark-borda text-roxo-claro focus:ring-roxo-claro"/>
          <label htmlFor="published" className="text-slate-200 font-medium cursor-pointer">Publicar imediatamente</label>
        </div>

        <div className="pt-4 border-t border-dark-borda flex justify-end">
          <button type="submit" disabled={loading} className="bg-roxo-claro hover:bg-roxo-hover disabled:opacity-50 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(130,10,209,0.3)] hover:-translate-y-0.5">
            <Save size={20} />
            {loading ? 'A guardar...' : 'Guardar Publicação'}
          </button>
        </div>
      </form>
    </div>
  );
}