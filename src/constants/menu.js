export const MAINMENU = [
	{
		menuName: 'Nowy przepis',
		id: 1,
		icon: '',
		subcategories: [
			{
				menuName: 'Nowy przepis',
				path: 'nowy-przepis',
				icon: '/plus.svg',
			},
		],
	},
	{
		menuName: 'Ogólne',
		id: 2,
		icon: '',
		subcategories: [
			{
				menuName: 'Strona Główna',
				path: 'strona-glowna',
				icon: '/house.svg',
			},
			{
				menuName: 'Ulubione',
				path: 'ulubione',
				icon: '/heart.svg',
			},
			{
				menuName: 'Statystyki',
				path: 'statystyki',
				icon: '/chart.svg',
			},
		],
	},
	{
		menuName: 'Posiłki',
		id: 3,
		icon: '',
		subcategories: [
			{
				menuName: 'Śniadanie',
				path: 'posilki/sniadanie',
				icon: '/cloud-sun.svg',
			},
			{
				menuName: 'Obiad',
				path: 'posilki/obiad',
				icon: '/sun.svg',
			},
			{
				menuName: 'Kolacja',
				path: 'posilki/kolacja',
				icon: '/moon.svg',
			},
		],
	},

	{
		menuName: 'Pozostałe',
		id: 4,
		icon: '',
		subcategories: [
			{
				menuName: 'Ustawienia',
				path: 'ustawienia',
				icon: '/gear.svg',
			},
			{
				menuName: 'Profil',
				path: 'profil',
				icon: '/user.svg',
			},
		],
	},
];
