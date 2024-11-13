export const environment = {
    production: true,
    title: 'Production Environment Heading',
    appVersion: require('../../package.json').version ,
    apiURL: 'https://services.mercotrace.com',
    redirectUrl: 'https://mercotrace.com',
    authority: 'https://kbiam.mercotrace.com/auth/realms/kbt-india',
    kb_registration_url:
        'https://kbiam.kanilebettu.in/auth/realms/kb-india/login-actions/registration?client_id=mercotrace_web_app&tab_id=GBv7BWZTU8k'
};
