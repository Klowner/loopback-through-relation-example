var async = require('async');

module.exports = function (server) {

	var ds = server.datasources.db; //postgres;

	function createSampleModels(cb) {

		server.models.PrefixedDevice.create({
			serial: 'potato',
			name: 'Crapinator 3000'
		}, function (err) {
			if (err) { throw err; }

			server.models.PrefixedPartner.create({
				partnerid: 1,
				name: 'Pete Crapmanigan'
			}, function (err) {
				if (err) { throw err; }

				server.models.PrefixedRegistry.create({
					partnerid: 1,
					serial: 'potato'
				}, function (err) {
					if (err) { throw err; }

					cb();
				});
			});
		});
	}

	var automigrate = function (cb) {
		ds.automigrate(function () {
			createSampleModels(cb);
		});
	};

	async.series([automigrate], function (err, results) {
	});
}
