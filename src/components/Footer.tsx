import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t border-dark-borda mt-12 bg-dark-fundo'>
      <div className='py-20 px-6 text-center max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold mb-6'>Pronto para o próximo nível?</h2>
        <p className='text-dark-texto mb-8'>Junte-se a nós e comece a transformar sua relação com o dinheiro hoje mesmo.</p>
        <Link href='https://grana-xp.vercel.app/' className='inline-block bg-roxo-claro hover:bg-roxo-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(130,10,209,0.4)] hover:-translate-y-1'>
          Criar Conta Gratuitamente
        </Link>
      </div>
      
      <div className='border-t border-dark-borda/50 py-8 px-6 text-center flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-dark-texto text-sm'>
        <p>© {new Date().getFullYear()} Grana XP. Todos os direitos reservados.</p>
        <div className='space-x-4 mt-4 md:mt-0'>
          <Link href='/termos' className='hover:text-roxo-claro'>Termos de Uso</Link>
          <Link href='/privacidade' className='hover:text-roxo-claro'>Privacidade</Link>
          <Link href='/contato' className='hover:text-roxo-claro'>Contato</Link>
        </div>
      </div>
    </footer>
  );
}