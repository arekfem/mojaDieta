export const MAINMENU = [
	{
		menuName: 'Nowy przepis',
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
