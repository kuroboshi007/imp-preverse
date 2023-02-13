export const defaultSettings = {
	title: '_components_',
	menu: [
    { name: 'home', icon: 'home', text: 'Home' },
    { name: 'about', icon: 'description', text: 'About' },
    { 
      name: 'docs', 
      icon: 'dashboard', 
      text: 'Components',
      expand: true,
      sub: [ 
        { 
          name: 'input', 
          text: 'Input', 
          to: '' },
        { 
          name: 'button', 
          text: 'Button', 
          to: '' },
        { 
          name: 'color', 
          text: 'Color', 
          url: '' },
        { 
          name: 'home', 
          text: 'Test2', 
          url: ''}
       ]
    },
    { name: 'home', icon: 'schedule', text: 'Page3',
      sub: [ 
        { 
          name: 'input', 
          text: 'Input', 
          to: '' },
        { 
          name: 'button', 
          text: 'Button', 
          to: '' },
        { 
          name: 'home', 
          text: 'TEst1', 
          url: '' },
        { 
          name: 'home', 
          text: 'Test2', 
          url: ''}
       ]
    },
    { name: 'home', icon: 'schedule', text: 'Page4' },
  ],
  user: [
    {
      name: 'user123',
      avater: '/src/assets/logo2.jpg',
      group: 'admin'
    },
  ]
}
