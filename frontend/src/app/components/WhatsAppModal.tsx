"use client";

import { useState, useRef, useEffect } from "react";

const countries = [
  { code: "+93", flag: "🇦🇫", name: "Afganistán" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+49", flag: "🇩🇪", name: "Alemania" },
  { code: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+1268", flag: "🇦🇬", name: "Antigua y Barbuda" },
  { code: "+966", flag: "🇸🇦", name: "Arabia Saudita" },
  { code: "+213", flag: "🇩🇿", name: "Argelia" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaiyán" },
  { code: "+1242", flag: "🇧🇸", name: "Bahamas" },
  { code: "+973", flag: "🇧🇭", name: "Baréin" },
  { code: "+880", flag: "🇧🇩", name: "Bangladés" },
  { code: "+1246", flag: "🇧🇧", name: "Barbados" },
  { code: "+375", flag: "🇧🇾", name: "Bielorrusia" },
  { code: "+32", flag: "🇧🇪", name: "Bélgica" },
  { code: "+501", flag: "🇧🇿", name: "Belice" },
  { code: "+229", flag: "🇧🇯", name: "Benín" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia y Herzegovina" },
  { code: "+267", flag: "🇧🇼", name: "Botsuana" },
  { code: "+55", flag: "🇧🇷", name: "Brasil" },
  { code: "+673", flag: "🇧🇳", name: "Brunéi" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+257", flag: "🇧🇮", name: "Burundi" },
  { code: "+975", flag: "🇧🇹", name: "Bután" },
  { code: "+238", flag: "🇨🇻", name: "Cabo Verde" },
  { code: "+855", flag: "🇰🇭", name: "Camboya" },
  { code: "+237", flag: "🇨🇲", name: "Camerún" },
  { code: "+1", flag: "🇨🇦", name: "Canadá" },
  { code: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+357", flag: "🇨🇾", name: "Chipre" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+269", flag: "🇰🇲", name: "Comoras" },
  { code: "+82", flag: "🇰🇷", name: "Corea del Sur" },
  { code: "+850", flag: "🇰🇵", name: "Corea del Norte" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+225", flag: "🇨🇮", name: "Costa de Marfil" },
  { code: "+385", flag: "🇭🇷", name: "Croacia" },
  { code: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "+45", flag: "🇩🇰", name: "Dinamarca" },
  { code: "+1767", flag: "🇩🇲", name: "Dominica" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+20", flag: "🇪🇬", name: "Egipto" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+971", flag: "🇦🇪", name: "Emiratos Árabes" },
  { code: "+291", flag: "🇪🇷", name: "Eritrea" },
  { code: "+421", flag: "🇸🇰", name: "Eslovaquia" },
  { code: "+386", flag: "🇸🇮", name: "Eslovenia" },
  { code: "+34", flag: "🇪🇸", name: "España" },
  { code: "+1", flag: "🇺🇸", name: "Estados Unidos" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+251", flag: "🇪🇹", name: "Etiopía" },
  { code: "+679", flag: "🇫🇯", name: "Fiyi" },
  { code: "+63", flag: "🇵🇭", name: "Filipinas" },
  { code: "+358", flag: "🇫🇮", name: "Finlandia" },
  { code: "+33", flag: "🇫🇷", name: "Francia" },
  { code: "+241", flag: "🇬🇦", name: "Gabón" },
  { code: "+220", flag: "🇬🇲", name: "Gambia" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+30", flag: "🇬🇷", name: "Grecia" },
  { code: "+1473", flag: "🇬🇩", name: "Granada" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "+240", flag: "🇬🇶", name: "Guinea Ecuatorial" },
  { code: "+245", flag: "🇬🇼", name: "Guinea-Bisáu" },
  { code: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "+509", flag: "🇭🇹", name: "Haití" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+36", flag: "🇭🇺", name: "Hungría" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+964", flag: "🇮🇶", name: "Irak" },
  { code: "+98", flag: "🇮🇷", name: "Irán" },
  { code: "+353", flag: "🇮🇪", name: "Irlanda" },
  { code: "+354", flag: "🇮🇸", name: "Islandia" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+39", flag: "🇮🇹", name: "Italia" },
  { code: "+1876", flag: "🇯🇲", name: "Jamaica" },
  { code: "+81", flag: "🇯🇵", name: "Japón" },
  { code: "+962", flag: "🇯🇴", name: "Jordania" },
  { code: "+7", flag: "🇰🇿", name: "Kazajistán" },
  { code: "+254", flag: "🇰🇪", name: "Kenia" },
  { code: "+996", flag: "🇰🇬", name: "Kirguistán" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+371", flag: "🇱🇻", name: "Letonia" },
  { code: "+961", flag: "🇱🇧", name: "Líbano" },
  { code: "+231", flag: "🇱🇷", name: "Liberia" },
  { code: "+218", flag: "🇱🇾", name: "Libia" },
  { code: "+423", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "+370", flag: "🇱🇹", name: "Lituania" },
  { code: "+352", flag: "🇱🇺", name: "Luxemburgo" },
  { code: "+261", flag: "🇲🇬", name: "Madagascar" },
  { code: "+60", flag: "🇲🇾", name: "Malasia" },
  { code: "+265", flag: "🇲🇼", name: "Malaui" },
  { code: "+960", flag: "🇲🇻", name: "Maldivas" },
  { code: "+223", flag: "🇲🇱", name: "Malí" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+212", flag: "🇲🇦", name: "Marruecos" },
  { code: "+230", flag: "🇲🇺", name: "Mauricio" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+52", flag: "🇲🇽", name: "México" },
  { code: "+373", flag: "🇲🇩", name: "Moldavia" },
  { code: "+377", flag: "🇲🇨", name: "Mónaco" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+382", flag: "🇲🇪", name: "Montenegro" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+227", flag: "🇳🇪", name: "Níger" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+47", flag: "🇳🇴", name: "Noruega" },
  { code: "+64", flag: "🇳🇿", name: "Nueva Zelanda" },
  { code: "+968", flag: "🇴🇲", name: "Omán" },
  { code: "+31", flag: "🇳🇱", name: "Países Bajos" },
  { code: "+92", flag: "🇵🇰", name: "Pakistán" },
  { code: "+507", flag: "🇵🇦", name: "Panamá" },
  { code: "+675", flag: "🇵🇬", name: "Papúa Nueva Guinea" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+51", flag: "🇵🇪", name: "Perú" },
  { code: "+48", flag: "🇵🇱", name: "Polonia" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+974", flag: "🇶🇦", name: "Catar" },
  { code: "+44", flag: "🇬🇧", name: "Reino Unido" },
  { code: "+236", flag: "🇨🇫", name: "Rep. Centroafricana" },
  { code: "+420", flag: "🇨🇿", name: "Rep. Checa" },
  { code: "+243", flag: "🇨🇩", name: "Rep. Dem. del Congo" },
  { code: "+1", flag: "🇩🇴", name: "Rep. Dominicana" },
  { code: "+242", flag: "🇨🇬", name: "Rep. del Congo" },
  { code: "+40", flag: "🇷🇴", name: "Rumanía" },
  { code: "+7", flag: "🇷🇺", name: "Rusia" },
  { code: "+250", flag: "🇷🇼", name: "Ruanda" },
  { code: "+1869", flag: "🇰🇳", name: "San Cristóbal y Nieves" },
  { code: "+1758", flag: "🇱🇨", name: "Santa Lucía" },
  { code: "+1784", flag: "🇻🇨", name: "San Vicente y Granadinas" },
  { code: "+685", flag: "🇼🇸", name: "Samoa" },
  { code: "+378", flag: "🇸🇲", name: "San Marino" },
  { code: "+239", flag: "🇸🇹", name: "Santo Tomé y Príncipe" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+248", flag: "🇸🇨", name: "Seychelles" },
  { code: "+232", flag: "🇸🇱", name: "Sierra Leona" },
  { code: "+65", flag: "🇸🇬", name: "Singapur" },
  { code: "+963", flag: "🇸🇾", name: "Siria" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+268", flag: "🇸🇿", name: "Suazilandia" },
  { code: "+27", flag: "🇿🇦", name: "Sudáfrica" },
  { code: "+249", flag: "🇸🇩", name: "Sudán" },
  { code: "+211", flag: "🇸🇸", name: "Sudán del Sur" },
  { code: "+46", flag: "🇸🇪", name: "Suecia" },
  { code: "+41", flag: "🇨🇭", name: "Suiza" },
  { code: "+597", flag: "🇸🇷", name: "Surinam" },
  { code: "+66", flag: "🇹🇭", name: "Tailandia" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+992", flag: "🇹🇯", name: "Tayikistán" },
  { code: "+670", flag: "🇹🇱", name: "Timor Oriental" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+676", flag: "🇹🇴", name: "Tonga" },
  { code: "+1868", flag: "🇹🇹", name: "Trinidad y Tobago" },
  { code: "+216", flag: "🇹🇳", name: "Túnez" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistán" },
  { code: "+90", flag: "🇹🇷", name: "Turquía" },
  { code: "+688", flag: "🇹🇻", name: "Tuvalu" },
  { code: "+380", flag: "🇺🇦", name: "Ucrania" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistán" },
  { code: "+678", flag: "🇻🇺", name: "Vanuatu" },
  { code: "+379", flag: "🇻🇦", name: "Vaticano" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabue" },
];

const DEFAULT_COUNTRY = countries.findIndex((c) => c.name === "México");

interface WhatsAppModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (phone: string) => void;
  resourceTitle: string;
}

export default function WhatsAppModal({
  open,
  onClose,
  onSubmit,
  resourceTitle,
}: WhatsAppModalProps) {
  const [selectedIdx, setSelectedIdx] = useState(DEFAULT_COUNTRY);
  const [phone, setPhone] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dropdownOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [dropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
        setCountrySearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!open) return null;

  const filteredCountries = countrySearch
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
          c.code.includes(countrySearch)
      )
    : countries;

  const selected = countries[selectedIdx];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    const fullPhone = selected.code + phone.replace(/\s/g, "");
    onSubmit(fullPhone);
    setPhone("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-2xl border border-card-border bg-dark-blue p-10 shadow-2xl shadow-black/40">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-foreground/40 hover:text-foreground transition-colors text-2xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-foreground mb-2">
          Reclamar Recurso
        </h2>
        <p className="text-foreground/50 text-base mb-8">
          <span className="text-cyan font-medium">{resourceTitle}</span>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="block text-base font-medium text-foreground/60 mb-3">
              Tu número de WhatsApp
            </label>

            {/* Country + Phone in one row */}
            <div className="relative flex items-stretch" ref={dropdownRef}>
              {/* Country button */}
              <button
                type="button"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  setCountrySearch("");
                }}
                className="shrink-0 flex items-center gap-2 px-4 rounded-l-xl border border-r-0 border-card-border bg-background/60 text-foreground text-base hover:border-cyan/30 transition-colors cursor-pointer"
              >
                <span className="text-xl">{selected.flag}</span>
                <span className="text-foreground/70 font-medium">{selected.code}</span>
                <span className="text-foreground/30 text-xs ml-0.5">▼</span>
              </button>

              {/* Phone input */}
              <input
                type="tel"
                placeholder="Ej: 55 1234 5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 py-3.5 px-4 rounded-r-xl border border-card-border bg-background/80 text-foreground text-lg placeholder:text-foreground/30 outline-none focus:border-cyan/50 transition-colors"
              />

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-card-border bg-dark-blue shadow-2xl shadow-black/40 z-10 overflow-hidden">
                  <div className="p-3 border-b border-card-border">
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Buscar país..."
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      className="w-full py-2.5 px-4 rounded-lg border border-card-border bg-background/60 text-foreground text-base placeholder:text-foreground/30 outline-none focus:border-cyan/50 transition-colors"
                    />
                  </div>
                  <div className="max-h-56 overflow-y-auto">
                    {filteredCountries.length === 0 && (
                      <p className="text-foreground/40 text-sm text-center py-4">
                        No se encontró ningún país.
                      </p>
                    )}
                    {filteredCountries.map((c) => {
                      const realIdx = countries.indexOf(c);
                      return (
                        <button
                          key={`${c.code}-${c.name}`}
                          type="button"
                          onClick={() => {
                            setSelectedIdx(realIdx);
                            setDropdownOpen(false);
                            setCountrySearch("");
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left text-base hover:bg-cyan/5 transition-colors cursor-pointer ${
                            realIdx === selectedIdx
                              ? "bg-cyan/10 text-cyan"
                              : "text-foreground"
                          }`}
                        >
                          <span className="text-xl">{c.flag}</span>
                          <span className="flex-1">{c.name}</span>
                          <span className="text-foreground/40 text-sm">
                            {c.code}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Notice */}
          <div className="rounded-xl bg-cyan/5 border border-cyan/15 px-5 py-4">
            <p className="text-foreground/50 text-sm leading-relaxed">
              🔒 Tu número solo se usará para enviarte contenido relevante de
              Riverius. No compartimos tus datos con terceros ni enviamos spam.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-cyan/15 border border-cyan/30 text-cyan text-lg font-semibold transition-all duration-300 hover:bg-cyan/25 glow-cyan-hover cursor-pointer"
          >
            Reclamar recurso gratis →
          </button>
        </form>
      </div>
    </div>
  );
}
