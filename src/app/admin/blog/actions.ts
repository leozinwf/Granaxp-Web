'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export async function criarPost(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error("Não autorizado");

  const title = formData.get('title') as string;
  const slug = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const published = formData.get('published') === 'true';
  const imageFile = formData.get('image') as File;

  let image_url = '';

  // Se o utilizador enviou uma imagem, fazemos o upload para o Bucket
  if (imageFile && imageFile.size > 0) {
    const fileExt = imageFile.name.split('.').pop();
    const fileName = `${slug}-${Date.now()}.${fileExt}`;
    
    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(fileName, imageFile);
      
    if (!uploadError) {
      // Pega o URL público da imagem recém-carregada
      const { data: publicUrlData } = supabase.storage.from('blog-images').getPublicUrl(fileName);
      image_url = publicUrlData.publicUrl;
    } else {
      console.error("Erro ao subir imagem:", uploadError);
    }
  }

  // Guarda o post na base de dados
  const { error } = await supabase.from('posts').insert({
    title,
    slug,
    excerpt,
    content,
    published,
    image_url,
    author_id: user.id,
  });

  if (error) {
    console.error("Erro ao guardar o post:", error);
    return;
  }

  redirect('/admin/blog');
}

export async function apagarPost(id: string) {
  'use server';
  
  const supabase = await createClient();
  
  // 1. Apagar o post da base de dados
  const { error } = await supabase.from('posts').delete().eq('id', id);
  
  if (error) {
    console.error("Erro ao apagar:", error);
    return { success: false };
  }
  
  return { success: true };
}