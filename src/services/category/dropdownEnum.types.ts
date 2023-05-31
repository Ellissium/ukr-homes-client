export type EnumValue = {
	key: string
	value: string
}

export const CategoryEnum: EnumValue[] = [
	{ key: '1', value: 'Оренда' },
	{ key: '2', value: 'Продаж' },
	{ key: '3', value: 'Для переселенців' }
]

export const PostSortEnum: EnumValue[] = [
	{ key: 'NEWEST', value: 'Найновіші' },
	{ key: 'OLDEST', value: 'Найстаріші' },
	{ key: 'HIGH_PRICE', value: 'Найдорожчі' },
	{ key: 'LOW_PRICE', value: 'Найдешевші' }
]

export const RegionEnum: EnumValue[] = [
	{ key: 'VIN', value: 'Вінницька область' },
	{ key: 'VOL', value: 'Волинська область' },
	{ key: 'DNI', value: 'Дніпропетровська область' },
	{ key: 'DON', value: 'Донецька область' },
	{ key: 'ZHY', value: 'Житомирська область' },
	{ key: 'ZAK', value: 'Закарпатська область' },
	{ key: 'ZAP', value: 'Запорізька область' },
	{ key: 'IVA', value: 'Івано-Франківська область' },
	{ key: 'KYI', value: 'Київська область' },
	{ key: 'KIR', value: 'Кіровоградська область' },
	{ key: 'LUG', value: 'Луганська область' },
	{ key: 'LVI', value: 'Львівська область' },
	{ key: 'MYK', value: 'Миколаївська область' },
	{ key: 'ODE', value: 'Одеська область' },
	{ key: 'POL', value: 'Полтавська область' },
	{ key: 'RIV', value: 'Рівненська область' },
	{ key: 'SUM', value: 'Сумська область' },
	{ key: 'TER', value: 'Тернопільська область' },
	{ key: 'KHA', value: 'Харківська область' },
	{ key: 'KHE', value: 'Херсонська область' },
	{ key: 'KHM', value: 'Хмельницька область' },
	{ key: 'CHER', value: 'Черкаська область' },
	{ key: 'CHERK', value: 'Чернігівська область' },
	{ key: 'CHERN', value: 'Чернівецька область' },
	{ key: 'CRI', value: 'Автономна Республіка Крим' }
]

export const SearchRegionEnum: EnumValue[] = [
	{ key: 'ALL', value: 'Всі області' },
	...RegionEnum
]
