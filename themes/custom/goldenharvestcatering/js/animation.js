function service_owl() {
  jQuery(".owl-carousel").owlCarousel({
    items: 4,
    margin: 10,
    dots: true,
    autoPlay: 3000,
    navigation: true,
    responsive: {
      500: { items: 1, dots: true, navigation: true },
      700: { items: 2, dots: true, navigation: true },
      900: { items: 4, dots: true, navigation: true },
    },
  });
}
jQuery(document).ready(function ($) {
  service_owl();
});
