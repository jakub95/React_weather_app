module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'rain': "url(https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHJhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)",
        'sunny': "url(https://images.unsplash.com/photo-1588443193856-41bbcca787cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1bm55JTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        'clouds': "url(https://images.unsplash.com/photo-1503198515498-d0bd9ed16902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Q2xvdWRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
        'main-bg': "url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)",
        'clear': "url(https://media.istockphoto.com/photos/nice-cloudless-empty-blue-sky-panorama-background-picture-id1251678082?b=1&k=20&m=1251678082&s=170667a&w=0&h=P2WVvh60VRFZnWxgCKs6XAnaDxXXSV2_tsTTgn9luzs=)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
