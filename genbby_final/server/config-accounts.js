ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '965192616949467',
    secret: '04cb413c77620cd37732b6532260de44'
});

ServiceConfiguration.configurations.remove({
    service: 'twitter'
});
 
ServiceConfiguration.configurations.insert({
    service: 'twitter',
    consumerKey: '9M4Gh0F9XSdueQKwWPfa2LGzK',
    secret: 'LJtAszs0aRoYqo0j6cYxjAEEMqMm9uxqgMtMNcLRTsagq7rbO2'
});

ServiceConfiguration.configurations.upsert(
{ service: 'steam' },
{
  $set: {
    loginStyle: 'redirect', // THIS MUST BE SET TO REDIRECT
    timeout: 10000          // 10 seconds
  }
});
