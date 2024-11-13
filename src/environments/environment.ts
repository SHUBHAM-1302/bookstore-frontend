export const environment = {
    production: false,
    appVersion: require('../../package.json').version + '-alpha',

    title: 'Development Environment Heading',
    apiURL: 'https://servicesdev.mercotrace.com',
    redirectUrl: 'http://localhost:4200',
    authority: 'https://kbiamdev.mercotrace.com/auth/realms/kbt-india',
    kb_registration_url:
        'https://kbiam.kanilebettu.in/auth/realms/kbt-india/login-actions/registration?client_id=mercotrace_web_app&tab_id=GBv7BWZTU8k'
};
