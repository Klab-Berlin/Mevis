# Plugins
# =======

# Plugin:   Stitch CSS
# URL:      http://stitchcss.com/
# Github:   https://github.com/anthonyshort/stitch-css
# require 'stitch'

# Config
# ======

project_type		= :stand_alone
environment			= :production	#:development
preferred_syntax	= :scss
http_path			= "/"
css_dir				= "client/styles"
sass_dir			= "client/styles/scss"
images_dir			= "client/assets"
javascripts_dir 	= "client/scripts"
relative_assets 	= true

# Disable query vars image.png?1234 when using asset helpers, e.g., image-url()
asset_cache_buster  :none

output_style = (environment == :production) ? :compressed : :expanded

line_comments = false
