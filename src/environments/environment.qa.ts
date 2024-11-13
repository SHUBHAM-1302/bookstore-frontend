export const environment = {
    production: false,
    appVersion: require('../../package.json').version + '-beta',
    title: 'Test Environment Heading',
    apiURL: 'https://servicesqa.mercotrace.com',
    redirectUrl: 'https://qa.mercotrace.com',
    authority: 'https://kbiamqa.mercotrace.com/auth/realms/kbt-india',
    kb_registration_url:
        'https://kbiamqa.mercotrace.com/realms/kbt-india/login-actions/registration?client_id=mercotrace_web_app&tab_id=GBv7BWZTU8k'
};
