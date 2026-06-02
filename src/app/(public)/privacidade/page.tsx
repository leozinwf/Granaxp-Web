import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function PrivacidadePage() {
  const atualizacao = "02 de Junho de 2026";

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <div className="w-16 h-16 bg-green-500/10 rounded-2xl border border-green-500/30 flex items-center justify-center mb-6">
          <ShieldAlert size={32} className="text-green-400" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-100 mb-4 tracking-tight">Política de Privacidade</h1>
        <p className="text-dark-texto">Última atualização: {atualizacao}</p>
      </div>

      <div className="space-y-8 text-dark-texto leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">1. Nosso Compromisso com a Segurança</h2>
          <p>
            A sua privacidade é uma prioridade absoluta para o Grana XP. Nós construímos nossa plataforma com a premissa de que seus dados financeiros são apenas seus. Não utilizamos Open Finance, não nos conectamos com seu banco e <strong>jamais</strong> solicitaremos senhas bancárias reais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">2. Dados que Coletamos</h2>
          <p className="mb-2">Para o funcionamento do aplicativo, coletamos apenas os seguintes dados essenciais:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dados de Conta:</strong> Nome, endereço de e-mail e senha (armazenada de forma criptografada).</li>
            <li><strong>Dados de Uso:</strong> Informações sobre navegação e interação com as mecânicas de gamificação (nível de XP, insígnias desbloqueadas) para melhorar sua experiência.</li>
            <li><strong>Registros Financeiros Inseridos:</strong> Os valores, categorias e descrições que você insere manualmente no aplicativo.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">3. Como Utilizamos os Dados</h2>
          <p>
            As informações coletadas são utilizadas estritamente para fornecer, manter e aprimorar os serviços do Grana XP. Seus dados financeiros organizacionais são usados unicamente para gerar o seu <em>dashboard</em> pessoal, calcular seu progresso (XP) e gerar os gráficos na sua tela. Não vendemos, alugamos ou repassamos seus dados para terceiros, anunciantes ou corretores de dados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">4. Armazenamento e Proteção</h2>
          <p>
            Utilizamos infraestrutura de nuvem moderna e segura (Supabase), que conta com Políticas de Segurança em Nível de Linha (RLS - Row Level Security). Isso garante que, mesmo no banco de dados, apenas a sua conta autenticada tenha permissão técnica para visualizar e modificar os seus registros financeiros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-200 mb-4">5. Seus Direitos</h2>
          <p>
            A qualquer momento, você possui o direito de:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Acessar todos os dados vinculados à sua conta.</li>
            <li>Corrigir dados imprecisos através do seu painel de configurações.</li>
            <li>Solicitar a exclusão total e permanente da sua conta e de todos os registros associados.</li>
          </ul>
        </section>

        <hr className="border-dark-borda/60 my-8" />

        <p className="text-sm">
          Se houver qualquer dúvida sobre como tratamos seus dados, não hesite em nos contatar através da página de <Link href="/contato" className="text-green-400 hover:underline">Contato</Link>.
        </p>
      </div>
    </div>
  );
}