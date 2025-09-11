// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	srcdark:string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	contact:Contact
	subFooter: SubFooter
}
export interface Contact{
	email1:string
	email2:string
	number1:string
	number2:string
	address:string
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Kloow',
		aboutText:
			'Powerful SaaS tools to simplify and automate digital marketing. Built to be responsive, accessible, and ready to grow with your business.',
		logo: {
			src: '/logo/favicon.png',
			srcdark:'/logo/favicon-darkmode.png',
			alt: 'Klow logo',
			text: 'loow'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Careers',
					subCategoryLink: '/blog'
				}
			]
		},
	],
	contact:{
		email1:'info@kloow.com',
		email2:'brany@kloow.com',
		number1:'+17575719996',
		number2:'+18022556844',
		address:"BRANY SIMEON CHACO HUISA 1603 Capitol Ave Suite 413 C1713 Cheyenne, WY 82001 United States",
	},
	subFooter: {
		copywriteText: '© Kloow 2025.'
	}
}
