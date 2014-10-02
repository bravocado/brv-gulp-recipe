var dest = "./dist";
var src = "./build";

module.exports = {
  browserSync: {
    server: {
      // We're serving the src folder as well
      // for sass sourcemap linking
      baseDir: [dest, src]
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ]
  },
  sass: {
    src: src + "/sass/*.{scss, sass}",
    dest: dest + "/css"
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  templates: {
    src: [src + "/views/**/*.jade", "!" + src + "/views/layouts/*.jade", "!" + src + "/views/includes/*.jade"],
    dest: dest
  },
  copystyles: {
    src: dest + "/css/style.css",
    dest: dest + "/css"
  },
  critical: {
    base: dest,
    src: 'index.html',
    styleTarget: 'css/critical.css',
    htmlTarget: 'index.html',
    width: 320,
    height: 480,
    minify: true
  },
  copy: {
    htaccess: '.htaccess',
    miscDest: 'dist',
    scriptSrc: 'build/scripts/**/*',
    scriptDest: 'dist/scripts'
  },
  scripts: {
    // Enable source maps
    debug: false,
    // Additional file extentions to make optional
    extensions: ['.js', '.coffee'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './build/scripts/partials/app.js',
      dest: src + '/scripts',
      outputName: 'app.js'
    }]
  }
};
