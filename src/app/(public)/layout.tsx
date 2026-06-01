import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen selection:bg-roxo-claro/30">
      <Header />
      {/* O main vai empurrar o footer para o final da tela caso a página tenha pouco conteúdo */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}