module.exports = {
	content1: {
		_id: "5b1a834b85729a0e280f9f8b",
		fields: {
			endDateRoadwork: "2018-12-27T23:00:00.000Z",
			startDateRoadwork: "2018-06-10T22:00:00.000Z",
			arcgisId: 101,
			map: {
				shapes: [
					{
						uid: 1543918360545,
						style: { color: "#C3D053" },
						geometry: {
							type: "Polygon",
							coordinates: [
								[
									[4.41075325012207, 51.21107756027342],
									[4.416632652282715, 51.21024413473806],
									[4.41800594329834, 51.21008282482769],
									[4.415602684020996, 51.21500252289363],
									[4.41075325012207, 51.21107756027342]
								]
							]
						},
						properties: { type: "polygon" },
						type: "Feature"
					},
					{
						type: "Feature",
						properties: { type: "rectangle" },
						geometry: {
							type: "Polygon",
							coordinates: [
								[
									[4.420366287231445, 51.21298631676182],
									[4.420323371887207, 51.21548639922819],
									[4.426374435424805, 51.21548639922819],
									[4.426374435424805, 51.213335798816615],
									[4.420366287231445, 51.21298631676182]
								]
							]
						},
						style: { color: "#C3D053" },
						uid: 1544801040904
					},
					{
						type: "Feature",
						properties: { type: "rectangle" },
						geometry: {
							type: "Polygon",
							coordinates: [
								[
									[4.427146911621094, 51.21317449973631],
									[4.427103996276855, 51.21529822570234],
									[4.434571266174316, 51.21529822570234],
									[4.434571266174316, 51.213416448144876],
									[4.427146911621094, 51.21317449973631]
								]
							]
						},
						style: { color: "#FBC980" },
						uid: 1544801046193
					},
					{
						type: "Feature",
						properties: { type: "rectangle" },
						geometry: {
							type: "Polygon",
							coordinates: [
								[
									[4.435772895812988, 51.212502414153015],
									[4.435815811157227, 51.21554016295146],
									[4.444484710693359, 51.21554016295146],
									[4.444484710693359, 51.21271748260698],
									[4.435772895812988, 51.212502414153015]
								]
							]
						},
						style: { color: "#C81F29" },
						uid: 1544801050184
					},
					{
						type: "Feature",
						properties: { type: "rectangle" },
						geometry: {
							type: "Polygon",
							coordinates: [
								[
									[4.4457292556762695, 51.21287878328823],
									[4.4457292556762695, 51.21556704478956],
									[4.453582763671875, 51.21556704478956],
									[4.453582763671875, 51.21287878328823],
									[4.4457292556762695, 51.21287878328823]
								]
							]
						},
						style: { color: "#2384C2" },
						uid: 1544801057586
					},
					{
						uid: 1555061711180,
						style: { color: "#C3D053" },
						geometry: {
							coordinates: [4.43195343017578, 51.21403475496859],
							type: "Point"
						},
						properties: { type: "marker" },
						type: "Feature"
					},
					{
						uid: 1555061711181,
						style: { color: "#C3D053" },
						geometry: {
							coordinates: [4.43195343017573, 51.21403475496851],
							type: "Point"
						},
						properties: { type: "marker" },
						type: "Feature"
					},
					{
						type: "Feature",
						properties: { type: "polyline" },
						geometry: {
							type: "LineString",
							coordinates: [
								[4.4069766998291, 51.2105398681062],
								[4.41255569458008, 51.2147874651126]
							],
						},
						style: { color: "#C3D053" },
						uid: 1638803053718,
					},
				],
				center: {
					autoDiscover: false,
					zoom: 15,
					lng: 4.416589736938477,
					lat: 51.21219325149057
				}
			},
			teaserIntro: {
				nl:
					"Vanaf maandag 11 juni is de Kotterstraat tijdelijk afgesloten voor het verkeer vanop de Straatsburgdok Noordkaai richting Groenendaallaan.",
				multiLanguage: true
			},
			teaserLabel: { nl: "Lees verder", multiLanguage: true },
			alternatives: [{ value: null }],
			related: [{ value: null }],
			description: {
				nl:
					"<p>Vanaf maandag 11 juni is de Kotterstraat tijdelijk afgesloten voor het verkeer vanop de Straatsburgdok Noordkaai richting Groenendaallaan.</p>\n\n<ul>\n\t<li>Doorgaand verkeer wordt omgeleid via de nieuwe doorgang ter hoogte van de oude spoorwegberm</li>\n\t<li>Verkeer vanop de Groendaallaan kan steeds door via de Kotterstraat</li>\n</ul>\n\n<p>De werken zijn tegen 23 juni afgerond.</p>\n",
				multiLanguage: true
			},
			situationRoadwork: {
				nl: "Kotterstraat afgesloten richting Groenendaallaan",
				multiLanguage: true
			},
			typeRoadwork: { nl: "Nutswerken", multiLanguage: true },
			title: {
				nl: "Kotterstraat afgesloten richting Groenendaallaan",
				multiLanguage: true
			},
			metaTitle: { multiLanguage: true },
			metaDescription: { multiLanguage: true, nl: "metaDescriptions" },
			startRoadworkLabel: { multiLanguage: true, nl: "Begin juni" },
			endRoadworkLabel: { multiLanguage: true, nl: "Eind december" }
		},
		meta: {
			firstPublished: "2018-06-08T13:23:23.385Z",
			contentType: {
				_id: "58f894372473b0250640c2c1",
				fields: [
					{
						dataType: "string",
						operators: [
							{ value: "equals", label: "Equals" },
							{ value: "i", label: "Contains" },
							{ value: "^", label: "Starts with" },
							{ value: "$", label: "Ends with" }
						],
						label: "Meta titel",
						type: "text",
						validation: { required: false },
						_id: "metaTitle",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "6dc6a0ed-41d1-42de-8abe-6a655f0dc04d"
					},
					{
						dataType: "string",
						operators: [
							{ value: "equals", label: "Equals" },
							{ value: "i", label: "Contains" },
							{ value: "^", label: "Starts with" },
							{ value: "$", label: "Ends with" }
						],
						type: "textarea",
						label: "Meta omschrijving",
						validation: { required: false },
						_id: "metaDescription",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "3c724d58-6f6a-43a0-8e80-33f3325429c1"
					},
					{
						_id: "title",
						validation: { required: true },
						type: "text",
						label: "Title",
						operators: [
							{ value: "equals", label: "Equals" },
							{ value: "i", label: "Contains" },
							{ value: "^", label: "Starts with" },
							{ value: "$", label: "Ends with" }
						],
						dataType: "string",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "90288658-f809-447d-9ab9-8addc33b61a2"
					},
					{
						_id: "arcgisId",
						validation: { required: true },
						type: "number",
						label: "Arcgis ID",
						operators: [
							{ value: "greater than", label: "Greater than" },
							{
								value: "greater than or equals",
								label: "Greater than or equals"
							},
							{ value: "lower than", label: "Smaller than" },
							{
								value: "lower than or equals",
								label: "Smaller than or equals"
							},
							{ value: "equals", label: "Is" }
						],
						dataType: "int",
						indexed: false,
						multiLanguage: false,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "b379ac34-8765-4aac-a326-2a8be80ceb9d"
					},
					{
						_id: "startDateRoadwork",
						validation: { required: true },
						type: "date",
						label: "Startdatum werkzaamheden",
						operators: [
							{ value: "greater than", label: "After" },
							{ value: "greater than or equals", label: "After or on" },
							{ value: "lower than", label: "Before" },
							{ value: "lower than or equals", label: "Before or on" },
							{ value: "equals", label: "On" }
						],
						dataType: "date",
						indexed: false,
						multiLanguage: false,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "318d3261-22b0-4c47-9753-7b341c155a3f"
					},
					{
						dataType: "string",
						operators: [
							{ value: "equals", label: "Equals" },
							{ value: "i", label: "Contains" },
							{ value: "^", label: "Starts with" },
							{ value: "$", label: "Ends with" }
						],
						type: "text",
						label: "Startdatum werkzaamheden label",
						validation: { required: false },
						_id: "startRoadworkLabel",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "9a744736-1d4b-48fb-8d10-0139670e941f"
					},
					{
						_id: "endDateRoadwork",
						validation: { required: true },
						type: "date",
						label: "Einddatum werkzaamheden",
						operators: [
							{ value: "greater than", label: "After" },
							{ value: "greater than or equals", label: "After or on" },
							{ value: "lower than", label: "Before" },
							{ value: "lower than or equals", label: "Before or on" },
							{ value: "equals", label: "On" }
						],
						dataType: "date",
						indexed: false,
						multiLanguage: false,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "304535c1-de26-4674-9586-040c584c1868"
					},
					{
						dataType: "string",
						operators: [
							{ value: "equals", label: "Equals" },
							{ value: "i", label: "Contains" },
							{ value: "^", label: "Starts with" },
							{ value: "$", label: "Ends with" }
						],
						label: "Einddatum werkzaamheden label",
						type: "text",
						validation: { required: false },
						_id: "endRoadworkLabel",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "6277c618-f958-4541-b469-a2a3b4e66561"
					},
					{
						_id: "typeRoadwork",
						validation: { required: true },
						type: "text",
						label: "Type werkzaamheden",
						operators: [
							{ value: "equals", label: "Equals" },
							{ value: "i", label: "Contains" },
							{ value: "^", label: "Starts with" },
							{ value: "$", label: "Ends with" }
						],
						dataType: "string",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "5f2842fd-e21d-410f-b40e-395d52733809"
					},
					{
						_id: "situationRoadwork",
						validation: { required: true },
						type: "textarea",
						label: "Situatie werkzaamheden",
						operators: [
							{ value: "equals", label: "Equals" },
							{ value: "i", label: "Contains" },
							{ value: "^", label: "Starts with" },
							{ value: "$", label: "Ends with" }
						],
						dataType: "string",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "80de6c86-82ff-4f91-9b12-61af60d57110"
					},
					{
						_id: "description",
						validation: { required: true },
						type: "richtext",
						label: "Omschrijving",
						operators: [
							{ label: "Equals", value: "equals" },
							{ label: "Contains", value: "i" },
							{ label: "Starts with", value: "^" },
							{ label: "Ends with", value: "$" }
						],
						dataType: "string",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "99ea6f81-37c4-4321-9c86-a59f6cadae30"
					},
					{
						_id: "map",
						validation: { required: false },
						type: "map",
						label: "Map",
						dataType: "object",
						indexed: false,
						multiLanguage: false,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "5de12d22-ab7c-41b8-a5a1-74b16080bfc4"
					},
					{
						_id: "related",
						validation: { required: false },
						type: "content-reference",
						data: ["d0a3706e-288f-4f98-be67-ca3edefcab6b"],
						label: "Gerelateerde informatie",
						operators: [
							{ label: "Is", value: "is" },
							{ label: "Is not", value: "is not" },
							{ label: "Contains all", value: "contains all" },
							{ label: "Contains none", value: "contains none" }
						],
						dataType: "object",
						indexed: false,
						multiLanguage: false,
						options: [],
						max: 5,
						min: 1,
						taxonomyLists: [],
						uuid: "f7195c21-9068-46df-a02b-00d42caf29f2"
					},
					{
						_id: "alternatives",
						validation: { required: false },
						type: "content-reference",
						data: [
							"6ea693f6-99e1-4ef0-a7cd-5244866e233d",
							"4c706317-3f65-477f-8eb8-0c480c588457"
						],
						label: "Alternatieven",
						operators: [
							{ value: "is", label: "Is" },
							{ value: "is not", label: "Is not" },
							{ value: "contains all", label: "Contains all" },
							{ value: "contains none", label: "Contains none" }
						],
						dataType: "object",
						indexed: false,
						multiLanguage: false,
						options: [],
						max: 4,
						min: 1,
						taxonomyLists: [],
						uuid: "680478d2-0c3c-46ae-99de-acfc39951f2a"
					},
					{
						dataType: "file",
						minimagewidth: 800,
						minimageheight: 600,
						type: "image",
						label: "Teaser afbeelding",
						validation: { required: false },
						_id: "teaser",
						data: {
							crops: [
								{
									type: "exact",
									safeLabel: "default",
									minWidth: 0,
									minHeight: 0,
									width: 800,
									height: 600,
									lockRatio: true,
									label: "Default",
									_lockID: true
								}
							]
						},
						indexed: false,
						multiLanguage: false,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "c0e5033c-84d7-47fa-9fed-10f69b87b57f"
					},
					{
						_id: "teaserLabel",
						validation: { required: true },
						label: "Teaser label",
						type: "text",
						operators: [
							{ label: "Equals", value: "equals" },
							{ label: "Contains", value: "i" },
							{ label: "Starts with", value: "^" },
							{ label: "Ends with", value: "$" }
						],
						dataType: "string",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "63362cb5-4940-4d7b-8c11-de14102dd051"
					},
					{
						_id: "teaserIntro",
						validation: { required: false },
						type: "textarea",
						label: "Teaser intro",
						operators: [
							{ value: "equals", label: "Equals" },
							{ value: "i", label: "Contains" },
							{ value: "^", label: "Starts with" },
							{ value: "$", label: "Ends with" }
						],
						dataType: "string",
						indexed: false,
						multiLanguage: true,
						options: [],
						max: 1,
						min: 1,
						taxonomyLists: [],
						uuid: "aa2d3b22-da20-438d-8507-766b9c5238c2"
					}
				],
				meta: {
					created: "2017-04-20T10:57:59.812Z",
					lastModified: "2018-12-03T09:27:50.835Z",
					taxonomy: { available: [], fieldType: "Taxonomy", tags: [] },
					hitCount: 0,
					deleted: false,
					canBeFiltered: true,
					lastEditor: "5ab0d3fbc39aba65207bb4a4",
					safeLabel: "road_works",
					description: "Wegenwerken pagina",
					label: "Road works"
				},
				uuid: "7b899a6e-cadc-4b0c-870b-3307af89d065",
				__v: 0
			},
			publishDate: "2018-06-08T13:30:00.000Z",
			label: "kotterstraat",
			safeLabel: "kotterstraat",
			parents: { views: [] },
			deleted: false,
			hasDetail: false,
			activeLanguages: ["nl"],
			hitCount: 0,
			published: true,
			lastModified: "2019-04-12T09:35:17.276Z",
			created: "2018-06-08T13:23:23.385Z",
			taxonomy: { tags: [], dataType: "taxonomy", available: [] },
			slug: { nl: "wegenwerken/kotterstraat", multiLanguage: true },
			lastIndex: "2019-04-12T01:00:08.542Z",
			status: "PUBLISHED",
			historyRef: "57310d53-6d06-46d0-b735-a9b6b09db9aa",
			historySummary: {
				count: 0,
				published: true,
				lastEdit: "2019-04-12T09:35:17.276Z",
				draft: { uuid: null, isLatestVersion: false },
				pending: { uuid: null, isLatestVersion: false },
				scheduled: { uuid: null, isLatestVersion: false }
			}
		},
		uuid: "7faa0d00-bb0a-4add-bfd4-195c26ff50b2"
	}
};
