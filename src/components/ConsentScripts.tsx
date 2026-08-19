import { useEffect } from "react";

type SiteConfig = {
  siteId: number;
  cookiePolicyId: number;
  gaId: string;
};

// Configuración por dominio: la web de Lovable y el dominio propio .es
const LOVABLE_CONFIG: SiteConfig = {
  siteId: 4649679,
  cookiePolicyId: 52670918,
  gaId: "G-8KDR9QETLB",
};

const ES_CONFIG: SiteConfig = {
  siteId: 4649684,
  cookiePolicyId: 29778301,
  gaId: "G-4TE7CMDCNQ",
};

function configForHost(host: string): SiteConfig | null {
  if (host.endsWith("peluquerialopezgarcia.es")) return ES_CONFIG;
  if (host.endsWith("lovable.app")) return LOVABLE_CONFIG;
  return null; // localhost / previews: sin analítica ni banner
}

function addScript(attrs: Record<string, string | boolean>, code?: string) {
  const s = document.createElement("script");
  s.type = "text/javascript";
  Object.entries(attrs).forEach(([k, v]) => {
    if (v === true) s.setAttribute(k, "");
    else if (typeof v === "string") s.setAttribute(k, v);
  });
  if (code) s.text = code;
  document.head.appendChild(s);
  return s;
}

export function ConsentScripts() {
  useEffect(() => {
    const config = configForHost(window.location.hostname);
    if (!config) return;
    if (document.getElementById("iubenda-cs-config")) return;

    // 1) Iubenda: configuración + autoblocking + banner
    addScript(
      { id: "iubenda-cs-config" },
      `var _iub = _iub || [];
_iub.csConfiguration = ${JSON.stringify({
        siteId: config.siteId,
        cookiePolicyId: config.cookiePolicyId,
        lang: "es",
        storage: { useSiteId: true },
      })};`,
    );
    addScript({ src: `https://cs.iubenda.com/autoblocking/${config.siteId}.js` });
    addScript({ src: "https://cdn.iubenda.com/cs/gpp/stub.js" });
    addScript({ src: "https://cdn.iubenda.com/cs/iubenda_cs.js", charset: "UTF-8", async: true });

    // 2) Google Analytics (el autoblocking de Iubenda lo libera tras el consentimiento)
    addScript({ src: `https://www.googletagmanager.com/gtag/js?id=${config.gaId}`, async: true });
    addScript(
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${config.gaId}');`,
    );
  }, []);

  return null;
}
