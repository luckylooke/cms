exports.icon = 'ti ti-cog';
exports.name = '@(Settings)';
exports.position = 20;
exports.permissions = [{ id: 'settings', name: 'Settings' }];
exports.visible = user => user.permissions.includes('settings');

exports.install = function() {
	ROUTE('API    /admin/    -settings_read    *Settings   --> read');
	ROUTE('API    /admin/    +settings_test    *Settings   --> test');
	ROUTE('API    /admin/    +settings_save    *Settings   --> save');
};
