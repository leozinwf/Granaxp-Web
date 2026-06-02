'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Ticket, Mail, Clock, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { atualizarStatusChamado } from './actions';

export default function SuporteAdmin() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [filtro, setFiltro] = useState<string>('todos');
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  async function carregarChamados() {
    const { data } = await supabase
      .from('support_tickets')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setTickets(data);
    setLoading(false);
  }

  useEffect(() => {
    carregarChamados();
  }, []);

  async function handleStatusChange(id: string, novoStatus: string) {
    const result = await atualizarStatusChamado(id, novoStatus);
    if (result.success) {
      setTickets(tickets.map(t => t.id === id ? { ...t, status: novoStatus } : t));
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1 w-fit"><HelpCircle size={12} /> Aberto</span>;
      case 'in_progress':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 flex items-center gap-1 w-fit"><Clock size={12} /> Em andamento</span>;
      case 'pending':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center gap-1 w-fit"><AlertCircle size={12} /> Pendente</span>;
      case 'closed':
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20 flex items-center gap-1 w-fit"><CheckCircle2 size={12} /> Fechado</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-500/10 text-slate-400 border border-slate-500/20 w-fit">Desconhecido</span>;
    }
  };

  const ticketsFiltrados = tickets.filter(t => filtro === 'todos' || t.status === filtro);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
          <Ticket size={32} className="text-roxo-claro" />
          Gerenciamento de Chamados
        </h1>

        {/* Filtros de Status */}
        <div className="flex bg-dark-card border border-dark-borda p-1 rounded-xl text-xs font-bold">
          {['todos', 'open', 'in_progress', 'pending', 'closed'].map((type) => (
            <button
              key={type}
              onClick={() => setFiltro(type)}
              className={`px-3 py-2 rounded-lg transition-all ${
                filtro === type 
                  ? 'bg-roxo-claro text-white' 
                  : 'text-dark-texto hover:text-slate-200'
              }`}
            >
              {type === 'todos' && 'Todos'}
              {type === 'open' && 'Abertos'}
              {type === 'in_progress' && 'Em andamento'}
              {type === 'pending' && 'Pendentes'}
              {type === 'closed' && 'Fechados'}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Chamados */}
      <div className="space-y-4">
        {loading ? (
          <div className="p-12 text-center text-dark-texto bg-dark-card border border-dark-borda rounded-2xl">Carregando chamados...</div>
        ) : ticketsFiltrados.length > 0 ? (
          ticketsFiltrados.map((ticket) => (
            <div key={ticket.id} className="bg-dark-card border border-dark-borda p-6 rounded-2xl shadow-xl hover:border-dark-borda/80 transition-all flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  {getStatusBadge(ticket.status)}
                  <h3 className="text-lg font-bold text-slate-200">{ticket.subject}</h3>
                </div>

                <p className="text-sm text-slate-400 bg-dark-fundo/40 p-4 rounded-xl border border-dark-borda/30 whitespace-pre-wrap leading-relaxed">
                  {ticket.message}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-dark-texto">
                  <span className="flex items-center gap-1 font-medium text-slate-300">👤 {ticket.name}</span>
                  <a href={`mailto:${ticket.email}`} className="flex items-center gap-1 hover:text-roxo-claro transition-colors"><Mail size={14} /> {ticket.email}</a>
                  <span>📅 {new Date(ticket.created_at).toLocaleString('pt-BR')}</span>
                </div>
              </div>

              {/* Controle de Status */}
              <div className="flex md:flex-col justify-end items-end gap-2 border-t md:border-t-0 border-dark-borda/40 pt-4 md:pt-0">
                <label htmlFor={`status-select-${ticket.id}`} className="text-[10px] font-bold text-dark-texto uppercase tracking-wider block md:mb-1">Alterar Estado</label>
                <select
                  id={`status-select-${ticket.id}`}
                  value={ticket.status}
                  onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                  className="bg-dark-fundo border border-dark-borda text-slate-200 px-3 py-2 rounded-xl text-xs font-bold outline-none focus:border-roxo-claro cursor-pointer transition-colors"
                >
                  <option value="open">🟢 Marcar como Aberto</option>
                  <option value="in_progress">🟡 Em andamento</option>
                  <option value="pending">🟠 Pendente</option>
                  <option value="closed">⚪ Fechado / Resolvido</option>
                </select>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-dark-texto bg-dark-card border border-dark-borda rounded-2xl">
            Nenhum chamado encontrado nessa categoria. Tudo sob controle!
          </div>
        )}
      </div>
    </div>
  );
}