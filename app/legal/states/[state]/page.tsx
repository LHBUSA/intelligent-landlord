import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { STATES, getStateData } from '@/lib/state-data'
import { AdSlot } from '@/components/AdSlot'

type Props = { params: Promise<{ state: string }> }

export async function generateStaticParams() {
  return STATES.map(s => ({ state: s.abbr.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params
  const s = getStateData(state)
  if (!s) return {}
  return {
    title: `${s.name} Landlord-Tenant Law Guide`,
    description: `${s.name} landlord tenant law: security deposit limit (${s.depositLimit}), eviction timeline (${s.evictionTimeline}), required entry notice (${s.entryNotice}), and rent control status.`,
  }
}

const FRIENDLY_LABEL: Record<string, { label: string; color: string }> = {
  high:   { label: 'Landlord-Favorable', color: 'var(--green)' },
  medium: { label: 'Balanced', color: 'var(--gold)' },
  low:    { label: 'Tenant-Protective', color: 'var(--red)' },
}

export default async function StatePage({ params }: Props) {
  const { state } = await params
  const s = getStateData(state)
  if (!s) notFound()

  const fl = FRIENDLY_LABEL[s.landlordFriendly]

  const DATA_ROWS = [
    { label: 'Security Deposit Limit', value: s.depositLimit },
    { label: 'Deposit Return Deadline', value: s.depositReturn },
    { label: 'Entry Notice Required', value: s.entryNotice },
    { label: 'Eviction Timeline', value: s.evictionTimeline },
    { label: 'Rent Control', value: s.rentControl },
  ]

  return (
    <>
      <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border2)', padding: 'clamp(32px,6vw,56px) var(--page-pad)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <Link href="/legal/states" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em' }}>← All States</Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 48, fontWeight: 700, color: 'var(--teal)', lineHeight: 1 }}>{s.abbr}</span>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.6rem,3.5vw,2.8rem)', fontWeight: 600, lineHeight: 1.2 }}>{s.name} Landlord-Tenant Law</h1>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, padding: '3px 10px', border: `1px solid ${fl.color}`, background: `${fl.color}12` }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: fl.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em', color: fl.color }}>{fl.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '40px var(--page-pad)', display: 'grid', gridTemplateColumns: '1fr clamp(240px,26%,300px)', gap: 48, alignItems: 'start' }}>
        <div>
          {/* Key numbers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 1, marginBottom: 40 }}>
            {DATA_ROWS.map(r => (
              <div key={r.label} style={{ background: 'var(--bg2)', border: '1px solid var(--border2)', padding: 20 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>{r.label}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 18, fontWeight: 600, color: 'var(--teal)', lineHeight: 1.3 }}>{r.value}</div>
              </div>
            ))}
          </div>

          {/* Key facts */}
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 600, marginBottom: 20 }}>Key Facts for {s.name} Landlords</h2>
          {s.keyFacts.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border2)' }}>
              <span style={{ color: 'var(--teal)', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, flexShrink: 0, marginTop: 2 }}>→</span>
              <span style={{ color: 'rgba(238,242,247,0.82)', lineHeight: 1.65 }}>{f}</span>
            </div>
          ))}

          <div style={{ marginTop: 32, padding: 20, background: 'var(--bg2)', border: '1px solid var(--border2)' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', lineHeight: 1.7 }}>
              ⚠ This page is for informational purposes only and does not constitute legal advice. Laws change frequently and vary by city and county. Consult a licensed attorney in {s.name} for guidance on your specific situation.
            </div>
          </div>
        </div>

        <aside style={{ position: 'sticky', top: 80 }}>
          <AdSlot size="rectangle" />
          <div style={{ marginTop: 28 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>Browse Other States</div>
            {STATES.slice(0, 10).filter(st => st.abbr !== s.abbr).slice(0, 8).map(st => (
              <Link key={st.abbr} href={`/legal/states/${st.abbr.toLowerCase()}`} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border2)', fontSize: 13, color: 'var(--muted)' }}>
                <span>{st.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--teal)' }}>{st.abbr}</span>
              </Link>
            ))}
            <Link href="/legal/states" style={{ display: 'block', marginTop: 12, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: 'var(--teal)', letterSpacing: '0.08em' }}>All 50 States →</Link>
          </div>
        </aside>
      </div>
    </>
  )
}
