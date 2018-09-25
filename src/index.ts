interface AppOptions {
	apiUrl?: string,
	apiKey?: string
}

export class App {
	apiUrl: string;
	constructor(options?: AppOptions) {
		this.apiUrl = options.apiUrl
	}
}
