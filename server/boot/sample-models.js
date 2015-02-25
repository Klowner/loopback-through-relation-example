module.exports = function (server) {


	server.models.Device.create({
		serial: 'potato',
		name: 'Crapinator 3000'
	}, function (err) {
		if (err) { throw err; }

		server.models.Partner.create({
			partnerid: 1,
			name: 'Pete Crapmanigan'
		}, function (err) {
			if (err) { throw err; }

			server.models.Registry.create({
				partnerid: 1,
				serial: 'potato'
			}, function (err) {
				if (err) { throw err; }

			});
		});
	});
}
