export function trim(string: string): string {
	if(string) { // string is not empty
		return string?.replace(/[\s\n\t]+/g, ' ').replace(/^\s+|\s+$/g, '')
	}

	return string
}