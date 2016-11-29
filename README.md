## Hello!
Hi there, I'm Callie and this site is a simple portfolio site I've created. There were a few things I wanted to focus on for it, and many others I've totally glossed over for the moment.

### Responsive Design
Yeah, I've got breakpoints, but I wanted to experiment and take this one a bit further with a foray into responsive typography. I also wanted to ensure the design worked as well on a giant screen as it does on a phone (but not a watch!).

It didn't turn out perfect, especially at smaller sizes where I wanted more control. For that I did resort to media queries.

### Front-End Goodness
Yep, this is built with React. Yes, that's overkill for something so simple, but it's my site and that's what I wanted to demonstrate :). I've not attempted to add universal rendering, but once/if I add support for AMP that'll become a necessity. I also didn't add anything like Redux, mainly because I currently have no use for it here.

### Server Power
I'm not really highlighting this so I didn't spend much time on it. That said, it is being served by NGINX, with HTTPS/2 using certificates from letsencrypt that's composed together with Docker ([see what I did there?](./docker-compose.yml)). At some point maybe I'll need a dynamic server, but for now a simple static one will do.

### Optimizations
I skipped tons of great stuff here. My images aren't optimized for the screen size, there's no print stylesheet, the styles themselves should be cleaned up, I've not tested it in a screen reader, it's not internationalized, some of the competitive sections like the experience & contact items should be better componetized, I'm not using a CDN for my assets, and many more! It's my hope that over time this section will eventually go away.

## Contact Me
Want to reach out? Great, I have a catch-all for my domain calinoracation.com, just send me an email to a creative address, or if you must you can use callie. 