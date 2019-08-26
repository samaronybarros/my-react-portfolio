import LocalizedStrings from 'localized-strings'

import portuguese from './portuguese'
import english from './english'

function appStrings() {
	return {
		pt: portuguese,
		en: english,
	}
}

export default new LocalizedStrings(appStrings())
