Contao Magnific Popup
=====================

Contao extension to integrate the [Magnific Popup](https://github.com/dimsemenov/Magnific-Popup) overlay.

## Usage

Simply activate the `j_magnific_popup` template in your page layout under _jQuery_. Do _not_ activate `j_colorbox` or `moo_mediabox` as well!

The Magnific Popup will work with all links that use the `data-lightbox="..."` parameter. However, any options like width and height etc. will not work (grouping does still work though).

Of course you can still initialize and manipulate the Magnific Popup via your own JavaScript.

## Customizing

If you want to use your own custom parameters, simply create your own `j_magnific_popup` template and insert your custom options there. For example, if you want to enable the zoom feature of Magnific Popup:
```php
  initMagnificPopup({
    // put your custom configuration here
    zoom: { enabled: true }
  });
```
Refer to the [Magnific Popup Documentation](http://dimsemenov.com/plugins/magnific-popup/documentation.html) for all available parameters.

## Types

By default, the extension defines the type for all Magnific Popup instances as `image`. You can set any of the types supported by Magnific Popup through several ways:

- through the `data-lightbox` parameter itself, e.g.

  ```html
  <a href="page.html" data-lightbox="iframe">Page</a>
  ```

  You can still also define a custom grouping name anywhere in the parameter:

  ```html
  <a href="page.html" data-lightbox="iframe group1">Page</a>
  ```

- by using your own Magnific Popup initialisation
- by setting the type globally through the options in your own `j_magnific_popup` template

## Additional Parameters

To support some compatibility with the old lightbox parameters of Contao, you can also define the width and height of the iframe popup like so:
```html
<a href="page.html" data-lightbox="iframe 800 600">Page</a>
```