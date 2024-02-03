import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import TranslationEn from './en/translation.json'
import TranslationRu from './ru/translation.json'
import TranslationKy from './ky/translation.json'

i18n.use(initReactI18next).init({
	lng: 'en',
	debug: true,
	resources: {
		en: {
			translation: TranslationEn,
		},
		ru: {
			translation: TranslationRu,
		},
		ky: {
			translation: TranslationKy,
		},
	},
})

export default i18n
