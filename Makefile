# Makefile for Development and Production Builds
.PHONY: fig-dev build-css watch-css
.PHONY: build deps clean clean-all
.PHONY: lein-deps webpack-deps
.PHONY: help

#
# Start
#

help:
	@echo "Finna Development and Production Build Makefile"
	@echo ""
	@echo "  fig-dev                 :: Start and watch Figwheel UI Build."
	@echo "  build-css               :: Build CSS Stylesheets Once."
	@echo "  watch-css               :: Start and watch CSS Stylesheet Generation (LESS)."
	@echo "  build                   :: Perform Production Build of Finna."
	@echo "  deps                    :: Pull and Install third-party dependencies."
	@echo "  clean                   :: Clean out build artifacts."
	@echo "  clean-all               :: Clean out more build artifacts."
	@echo "  help                    :: Display this help message."


fig-dev:
	lein figwheel dev


clean:
	lein clean
	rm -rf dist
	rm -rf ./resources/public/css
	rm -rf ./resources/public/js/index_bundle.js


clean-all: clean
	rm -rf node_modules


lein-deps:
	lein deps


webpack-deps:
	node ./node_modules/webpack-cli/bin/cli.js

deps: lein-deps webpack-deps


build: build-css build-ui


build-ui:
	lein cljsbuild once prod


# Environment Setup for lessc, and less-watch-compiler
LESS_WATCH_SCRIPT := ./node_modules/less-watch-compiler/dist/less-watch-compiler.js
LESS_BIN_PATH := ./node_modules/less/bin
PATH := $(LESS_BIN_PATH):$(PATH)


watch-css:
	node $(LESS_WATCH_SCRIPT) resources/public/less resources/public/css main.less


build-css:
	$(LESS_BIN_PATH)/lessc resources/public/less/main.less resources/public/css/main.css
