export const myWorks = [
	{
		images: [
			{ src: './images/serat1.png', title: 'Landing Page', caption: '' },
			{ src: './images/serat2.png', title: 'Main Page', caption: '' },
			{ src: './images/serat3.png', title: 'Admin Dashboard', caption: '' },
			{ src: './images/serat4.png', title: 'Admin Product Management', caption: '' },
		],
		type: 'Dynamic Web',
		title: 'Serat',
		// shortdesc: 'A mobile app for reading manga, manhua, and manhwa in Indonesian translation.',
		desc: (
			<p className="text-normal">
				Collection of
				<span class="text-yellow">clothin products information</span>
				and can be searched, sorted and linked to e-commerce address. Products can be manage by admin in dashboard page
				<span class="text-blue">(create, read, update, delete)</span>.
			</p>
		),
		tags: ['PHP', 'Bootstrap', 'JavaScript', 'MySql'],
		links: [],
	},
	{
		images: [
			{ src: './images/icon.png', title: 'Logoku', caption: 'Ini ya logoku mana logomu' },
			{ src: './images/bigsur.jpg', title: 'Big Sur', caption: 'wallpaper khas apple (pengen jir)' },
		],
		type: 'Mobile APP',
		title: 'Comikaze',
		shortdesc: 'A mobile app for reading manga, manhua, and manhwa in Indonesian translation.',
		desc: (
			<p className="text-normal">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non tellus sodales, venenatis est nec, interdum
				lacus. Aliquam sit amet diam et leo aliquam imperdiet. Nullam eu scelerisque lacus. Proin et orci ante. Maecenas
				ut quam id elit pharetra pellentesque vitae ac nulla. Ut vitae nibh non diam tristique eleifend sed vel diam.
				Cras velit purus, feugiat sed tempor id, sagittis id justo.
			</p>
		),
		tags: ['Flutter', 'NodeJS', 'MongoDB'],
		links: [
			{
				icon: 'github-fill',
				link: 'https://github.com',
			},
			{
				icon: 'link-line',
				link: 'https://dazveloper.netlify.app',
			},
		],
	},
];
