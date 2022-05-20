machine := $(shell uname)
script =$(1)
cmd ::=


ifeq ($(machine), Linux)
	export cmd +=${call script,deploy.sh}
else 
	export cmd +=${call script,deploy.cmd}
endif



banners: 
	@$(cmd) create banners-proxy media-chin-00 BannerProxy

contacts: 
	@$(cmd) create contacts-proxy media-chin-00 ContactProxy

disclaims:
	@$(cmd) create disclaims-proxy media-chin-00 DisclaimProxy

medias: 
	@$(cmd) create media-proxy media-chin-00 MediaProxy

teams: 
	@$(cmd) create teams-proxy media-chin-00 TeamProxy

testimonials: 
	@$(cmd) create testimonials-proxy media-chin-00 TestimonialProxy

services:
	@$(cmd) create services-proxy media-chin-00 ServiceProxy

gateways:
	@$(cmd) create gateways-proxy media-chin-00 GateWayProxy

all: banners contacts medias teams testimonials disclaims gateways services 

test: $(machine)
	echo $$cmd