export const myExperiences = [
	{
		images: [{ src: './images/exp_inagri.jpeg', title: 'MoU day', caption: '' }],
		title: 'Scholarship',
		place: {
			name: 'Inagri',
			link: 'https://inagri.asia',
		},
		date: {
			start: 'Feb 2023',
			end: 'Present',
		},
		points: [
			<p className="text-normal">
				Work in team to build company <span className="text-yellow">real project</span>. To build technology that help
				society in built village.
			</p>,
			<p className="text-normal">
				Joined in <span className="text-yellow">backend team</span>. We use Django and MongoDB as rest API web service.
			</p>,
			<p className="text-normal">
				We receive routine <span className="text-yellow">training</span> and some{' '}
				<span className="text-yellow">pocket money</span> per month.
			</p>,
		],
		credentials: [''],
	},
	{
		images: [
			{ src: './images/exp_bfi1.JPG', title: 'CTO and Manager BFI', caption: 'After winners announcement moment' },
			{ src: './images/exp_bfi2.png', title: 'Thrilling moment', caption: 'An hour before...' },
			{ src: './images/exp_bfi3.JPG', title: 'With BFI mentor', caption: 'After winners announcement moment' },
			{
				src: './images/exp_bfi4.png',
				title: 'Captain Speechs',
				caption: 'Discuss something with team, he is my captain',
			},
		],
		title: '1st Winner',
		place: {
			name: 'BFI',
			link: 'https://bfi.co.id',
		},
		date: {
			start: 'Feb 2023',
			end: '',
		},
		points: [
			<p className="text-normal">
				[PROBLEM] What an idea to help company reach <span className="text-yellow">BOP (Bottom Of Pyramid)</span> people
				use service with <span className="text-yellow">digitization</span>
				technology?
			</p>,
			<p className="text-normal">
				[EMPHATIZE] BOP people need to get <span className="text-yellow">faster service</span> with{' '}
				<span className="text-yellow">convenience</span> which helps{' '}
				<span className="text-yellow">limited understanding</span> of their technology
			</p>,
			<p className="text-normal">
				[SOLUTION] I and my team, build an <span className="text-yellow">IoT stand machine</span> at some points for BOP
				which integrate with a <span className="text-yellow">sensor</span> to scan documents like KTP, Income Letter,
				and any other credentials. Besides that, we also provide mobile applications to{' '}
				<span className="text-yellow">scan independently</span> anywhere anytime. This will be{' '}
				<span className="text-yellow">scan independently</span>
				for customers because they <span className="text-yellow">don't need to queue again</span> and also for the
				company because <span className="text-yellow">don't need to rush</span> with paper things.
			</p>,
		],
		credentials: [''],
	},
];
