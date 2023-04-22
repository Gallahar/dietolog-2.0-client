import { LanguageTemplate } from './template'

export const ua: LanguageTemplate = {
	mark: 'ua',
	global: {
		error: 'Помилка... Будь ласка, спробуйте пізніше',
		field_is_required: "Це поле обов'язкове",
		_return: 'Повернутися',
		apply: 'Підтвердити',
		order: 'Замовити',
		_continue: 'Далi',
		privacy:
			'Натискаючи кнопку “Замовити”, Ви погоджуєтеся, що замовляєте цей продукт тільки для особистого використання. Використання в комерційних цілях заборонено.',
	},
	header: {
		main: 'Головна',
		about: 'Про мене',
		consults_and_rates: 'Консультації',
		turnkey_solutions: 'Готові рішення',
		contacts: 'Контакти',
	},
	_404: {
		heading: `Упс... схоже,
щось пішло не так`,
		text_top: 'Сторінка, на яку Ви хотіли перейти, не знайдена.',
		text_mid: 'Можливо введено некоректну адресу або сторінку видалено.',
		text_bot:
			'Ви можете скористатися меню сайту або повернутися на головну сторінку.',
		back_to_main: 'Повернутися на головну',
	},
	contacts: {
		my_contacts: 'Мої контакти',
		addres_first_pt: 'м. Київ, вул. Велика Васильківська,',
		addres_second_pt: 'буд. 116, оф. 12 (станція метро “Палац Україна”)',
		name: 'Катерина Кириченко',
		speech: 'Зустрінемося на консультації',
	},
	sign_for_consult: {
		sign_for_consult: 'Запис на консультацію',
		your_name: 'Ваше ім’я',
		phone: 'Телефон',
		email: 'Електронна пошта',
		enroll: 'Записатися',
		response:
			'Дякую! Найближчим часом я передзвоню або напишу Вам для обговорення всіх деталей.',
		field_is_required: "Це поле обов'язкове",
		invalid_phone: 'Невірний номер',
		invalid_email: 'Невірний Email',
	},
	reviews: {
		heading: 'Відгуки клієнтів',
		add_review: 'Залиште свій відгук',
		response:
			'Дякую! Найближчим часом Ваш відгук опублікуєтьсяв розділі “Відгуки клієнтів”.',
	},
	leave_review: {
		your_review: 'Ваш Відгук',
		your_name: 'Ваше ім’я',
		review: 'Відгук',
		send: 'Відправити',
		review_min_max_length:
			'Мінімальна довжина відгуку - 50, максимальна - 300',
	},
	main: {
		name: 'Катерина',
		last_name: 'Кириченко',
		post_name: 'сертифікований дієтолог-нутриціолог',
		description:
			'Стану Вашим наставником та помічником на шляху до довготривалого результату через любов до себе та прийняття свого тіла',
		sign_for_consult: 'Запис на консультацію',
	},
	about: {
		my_approach: 'Про мій підхід',
		col_1_text_1:
			'Проводжу персональні консультації як онлайн, так і офлайн, розробляю гнучкі схеми харчування або конструктори меню індивідуально для кожного клієнта. Під час супроводу відповідаю на всі запитання та підтримую психологічно.',
		col_1_text_2:
			"На консультаціях даю рекомендації та допомагаю впровадити їх у Ваше життя м'яко та комфортно для уникнення постійних гойдалок у вазі та зривів.  Навчаю правилу трьох П - посильно, поступово, постійно.",
		worth_1: 'трохи статистики',
		worth_2:
			'Маю досвід в дієтології понад 10 років. Завжди стежу за новинками в нутриціології та обов’язково перевіряю їх на собі. Постійно підвищую свою кваліфікацію, про що свідчать відповідні дипломи та сетифікати.',
		worth_3:
			'Працюю з клієнтами за принципами довірчого контакту та підтримки, не застосовую метод “батога”. Понад 1000 моїх клієнтів змогли досягти бажаного результату, а деякі з них звертаються повторно вже з новими цілями.',

		for_who: 'Кому це підходить',
		for_who_text_1:
			'Ласунчикам та любителям фаст-фуду - знижуємо вагу, оздоровлюємося, налагоджуємо відносини з їжею та змінюємо спосіб життя.',
		for_who_text_2:
			'ЗОЖникам “зі стажем”. Ви пройшли безліч марафонів, у Вас постійні гойдалки у вазі - вчимося балансу в харчуванні без жорстких обмежень.',
		for_who_text_3:
			'Хочете повернути форму після пологів - підбираємо індивідуальне харчування з урахуванням грудного вигодовування чи без нього.',
		for_who_text_4:
			"Боїтеся набрати зайві кілограми під час вагітності - складаємо харчування для адекватного набору ваги та підтримки здоров'я матері та майбутньої дитини.",
		for_who_text_5:
			'Вас турбують загострення хронічних захворювань - розписую лікувальне/профілактичне харчування та дієтичні добавки за погодженням з Вашим лікарем.',
		for_who_text_6:
			"Відвідуєте фітнес-клуби, збільшуєте м'язову масу та пружність тіла. Набридла підвищена стомлюваність та емоційна нестійкість. Вам також до мене.",

		not_suitable: 'З ким я не працюю',
		not_suitable_text_1:
			'З тими, хто приходить лише за "чарівною пігулкою". Я даю лише інструменти для зміни фігури, способу життя, самопочуття, але змінюєте себе Ви! Тому схуднення, зміна мислення та звичок є саме Вашою заслугою!',
		not_suitable_text_2:
			'"Я краще знаю, як треба". Якщо клієнт вважає, що у нього більше знань у цій сфері, ніж у фахівця, то йому потрібно втілювати їх у життя, а не витрачати свій і мій час на нескінченні суперечки.',

		my_education: 'Моя освіта',
		reviews: 'Відгуки клієнтів',
	},
	consults_and_rates: {
		consults_and_rates: 'консультації\nта тарифи',
		col_1_text_1:
			'У чому різниця між гнучкою схемою харчування та конструктором меню?',
		col_1_text_2:
			'Гнучка схема харчування передбачає, що Вам не потрібно рахувати калорії та білки/жири/вуглеводи. У схемі вже є чіткі пропорції продуктів та страв. При цьому зберігається гнучкість у харчуванні, адже Ви вибираєте те, що бажаєте саме зараз, самостійно поєднуєте продукти.',
		col_1_text_3:
			'Конструктор меню зберігає таку ж саму гнучкість, але я за Вас складаю різні поєднання продуктів та страв з урахуванням Ваших уподобань у їжі, способу життя та стану здоров’я. Вам залишається лише обрати варіант сніданку, обіду, вечері, перекусу тощо, з урахуванням Ваших побажань та наявності продуктів у холодильнику.',
		detailed_price: 'Розгорнутий прайс',
	},

	prepared_solutions: {
		prepared_solutions: 'Готові рішення',
		col_1_part_1:
			'<p>Також Ви можете обрати та замовити <b>готову</b> програму харчування з урахуванням Ваших цілей та потреб.\nЦе готовий план харчування, який допоможе Вам скоригувати свою вагу до норми та навчить основам збалансованого харчування.</p>',
		col_1_part_2:
			'Підійде людям, що не мають захворювань у гострій формі та тяжких хронічних захворювань. При захворюваннях - лише індивідуальні консультації.',
		col_2_part_1:
			'<p>Програма складається з <b>конструктора</b> меню, відповідних рекомендацій щодо способу життя (питного режиму, фізичних навантажень, сну, чітмілів та ін.), прикладів рецептів та переліку дозволених смачних продуктів, які зазвичай заборонені в жорстких дієтах.</p>',
		col_2_part_2:
			'<p>А також Ви отримаєте <b>в подарунок</b> чек-лист на вибір: “Антистрес” або “Харчування в умовах відключення світла/води/газу” (чек-листи також можна замовити окремо).</p>',

		constructor_heading: 'Конструктор меню та його переваги',
		constructor_1:
			'Конструктор меню - це набір варіантів прийомів їжі (сніданку, обіду, вечері, перекусів тощо) з чіткими пропорціями продуктів, страв та їх поєднань з урахуванням калорій та білків/жирів/вуглеводів.',
		constructor_2:
			'До програми додається детальне пояснення щодо використання конструктора та приклад складання меню на два дні.',
		constructor_3:
			"<p>Головною перевагою конструктора в порівнянні зі звичайним статичним меню є його <b>гнучкість</b>, адже Ви вибираєте те, що бажаєте саме зараз (або враховуючи наявність продуктів у холодильнику), без прив'язки страви до конкретного дня.</p>",
		constructor_4:
			'<p>Ця гнучкість дозволяє використовувати програму щонайменше <b>1 місяць</b> на відміну від стандартних готових меню, які розраховані на певну кількість днів.</p>',
		constructor_5:
			'При цьому Ваше харчування буде різноманітним та унікальним завдяки комбінаціям варіантів сніданків, обідів та інших прийомів їжі.',

		constructor_col_1_part_1:
			'<p>Ще однією особливістю програми є її максимальна <b>адаптованість</b> до клієнта та його потреб.</p>',
		constructor_col_1_part_2:
			'При складанні конструктора, рекомендацій та рецептів враховуються певні критерії, які Ви обираєте та вказуєте при замовленні.',
		constructor_col_1_part_3:
			'Наприклад: калорійність меню, Ваша стать, кількість прийомів їжі, інформація щодо непереносності глютену/лактози та ін.',

		constructor_col_2_part_1:
			'Крім того, Ви можете замовити програму зручною для Вас мовою – українською, російською чи англійською.',
		constructor_col_2_part_2:
			'При досягненні певних результатів після використання програми Ви можете замовити іншу. Наприклад, при змінах у вазі - програму з іншою калорійністю чи призначенням.',
		constructor_col_2_part_3:
			'Якщо у Вас виникнуть запитання щодо вибору критеріїв або самої програми, з радістю відповім на них.',

		programs_and_checks: 'Програми та чек-листи',
		help_to_pick: 'Допомога у виборі програми',
	},

	help_to_pick: {
		help_to_pick: 'Допомога у виборі програми',
		your_name: 'Ваше ім’я',
		phone: 'Телефон',
		email: 'Електронна пошта',
		description:
			'Будь ласка, коротко опишіть своє запитання. Що саме Вас цікавить, основна мета, найважливіші критерії при підборі програми.',
		send: 'Відправити',
		response:
			'Дякую за звернення!\nНайближчим часом я напишу  або передзвоню Вам.',
		field_is_required: "Це поле обов'язкове",
		invalid_phone: 'Невірний номер',
		invalid_email: 'Невірний Email',
		description_min_max_length:
			'Мінімальна довжина вашого повідомлення - 50, максимальна - 300',
	},

	detailed_prices: {
		service_type: 'Вид послуги',
		remark: 'Ціна на повторну консультацію може змінюватися за умови зміни первинного пакета',

		package: 'Пакет',
	},
	program: {
		fields_required:
			'Для замовлення програми оберіть, будь ласка, відповідні пункти.',
		included_to_program: 'До програми входять',
		choose_radios:
			'Перед замовленням програми оберіть, будь ласка, відповідні пункти.',
		back_to_programs: 'Повернутися до програм',
		success_program:
			'Дякую! Найближчим часом Вам надійде повідомлення щодо підтвердження Вашого замовлення.',
		_program: 'Програма',
	},
	program_popup: {
		your_order: 'Ваше замовлення',
		chosen_params: 'Обранi параметри',
	},
	certificates: {
		diplomas_heading: 'Дипломи та сертифікати',
		skills_heading: 'Відточування навичок',
		skill_1:
			'У своїй діяльності я керуюся висловлюванням А. Лінкольна “Ким би ти не був - будь краще”. Окрім постійної роботи з клієнтами, я намагаюся втілювати та вдосконалювати свої знання та навички в різноманітних проєктах і заходах.',
		skill_2:
			'Проведення майстер-класів та семінарів завдяки зворотному зв’язку з учасниками дозволяє відстежити реальні проблеми людей, пов’язані з дієтологією, а віддача аудиторії надихає на подальший розвиток.',
		skill_3:
			'<p>Довготривала та плідна співпраця з мережею фітнес-клубів <b>“Sport Life”</b> допомогла вдосконалити знання у сфері спортивної дієтології.</p>',
		skill_4:
			'<p>Неодноразові інтерв’ю в програмі “Ранок з Україною” на <b>ТРК “Україна”</b> давали імпульс до ретельного та глибокого вивчення поставлених питань.</p>',
		skill_5:
			'<p>Співпраця з ізраїльською компанією з доставки здорового харчування <b>“Foodlabriut”</b> відточує навички роботи з меню та технологічними картами для страв. А також це ще один плюс до скарбнички знань національних кухонь світу.</p>',
		skill_6:
			'<p>Уроки малювання в художній майстерні <b>“АРТ-ПРОСТІР”</b> з художником <b>Альоною ДЗЮБА-ПАНАСЮК</b> допомагають розвинути творчий потенціал. Адже, у певному розумінні, складання меню для клієнтів - це також творчий процес.</p>',
	},
}
