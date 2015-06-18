(function() { window.onload = function() {
    'use strict';

    document.title = 'semitransparent blackness';

    var $body = document.body;

    var $icons = [undefined];
    for (var icon_id = 1; icon_id <= 129; icon_id++) {
        $icons[icon_id] = icon_create(icon_id);
    }

    var $icons_render_cache = [undefined];

    var $current_icon;

    var COLUMNS = 4;

    var $protectorate
        = shop('Protectorate',         $icons.slice(  1,   1+12), COLUMNS);
    var $arcane_sanctum
        = shop('Arcane Sanctum',       $icons.slice( 13,  13+10), COLUMNS);
    var $supportive_vestments
        = shop('Supportive Vestments', $icons.slice( 23,  23+12), COLUMNS);
    var $ancient_weaponry
         = shop('Ancient Weaponry',    $icons.slice( 35,  35+12), COLUMNS);
    var $enchanted_artifacts
        = shop('Enchanted Artifacts',  $icons.slice( 47,  47+12), COLUMNS);
    var $gateway_relics
        = shop('Gateway Relics',       $icons.slice( 59,  59+12), COLUMNS);
    var $cache_of_quel_thalan
        = shop('Cache of Quel-Thelan', $icons.slice( 71,  71+12), COLUMNS);

    var $anchient_of_wonders
        = shop('Ancient of Wonders',
            [].concat($icons.slice( 83,  83+10), blank(), $icons[93]),
            COLUMNS
          );

    var $sena_the_accesorizer
        = shop('Sena the Accesorizer', $icons.slice( 94,  94+12), COLUMNS);
    var $weapon_dealer
        = shop('Weapon Dealer',        $icons.slice(106, 106+12), COLUMNS);
    var $leragas_the_vile
        = shop('Lerags the Vile',      $icons.slice(118, 118+12), COLUMNS);


    var $header = document.createElement('div');
    $header.classList.add('header');

    var $title = document.createElement('h1');
    $title.classList.add('title');
    $title.textContent = 'Stb Demo';

    var $reference = document.createElement('p');
    $reference.classList.add('reference');
    $reference.textContent = 'icons and item information from ';

    var $link = document.createElement('a');
    $link.textContent = 'playdota.com/items';
    $link.href = 'http://playdota.com/items';

    Dom.node_push($reference, $link);

    Dom.node_push($header,
        $title,
        $reference
    );

    Dom.node_push($body,
//         $icons.slice(1),
        $header,
        $protectorate,
        $arcane_sanctum,
        $supportive_vestments,
        $ancient_weaponry,
        $enchanted_artifacts,
        $gateway_relics,
        $cache_of_quel_thalan,
        $anchient_of_wonders,
        $sena_the_accesorizer,
        $weapon_dealer,
        $leragas_the_vile,
        Stb.get_node()
    );


    Stb.register_class('icon', icon_on_hover_in, icon_on_hover_out);

    function icon_on_hover_in($icon, $stb) {
        show_icon_information($icon, $stb);
        highlight_item_icon_and_its_requirements($icon, Items[$icon.id]);

        $current_icon = $icon;
    }

    function icon_on_hover_out($icon, $stb) {
        remove_highlights($icon, Items[$icon.id]);
    }

    function show_icon_information($icon, $stb) {
        var icon_id = $icon.id

        // Because the item information never changes, we can cache
        // and reuse the $item node.
        if ($icons_render_cache[icon_id] !== undefined) {
            Dom.node_push($stb, $icons_render_cache[icon_id]);
//             console.log('cached');
            return;
        }
//         console.log('NOT cached');

        var item = Items[icon_id];

//         var $id = document.createElement('div');
//         $id.textContent = 'id: ' + item.id;

        var $item = document.createElement('div');
        $item.classList.add('item');

        var $name = document.createElement('div');
        $name.classList.add('name');
        $name.textContent = item.name;

        var $shop = document.createElement('div');
        $shop.classList.add('shop-name');
        $shop.textContent = 'Shop: ' + item.shop;

        var $price = document.createElement('div');
        $price.classList.add('price');
        $price.textContent = 'price: ' + item.price;


        var $additional_info = document.createElement('ul');
        $additional_info.classList.add('additional-information');
        var additional_info  = item.additional_information;
        for (
            var additional_info_index = 0, additional_info_length = additional_info.length;
            additional_info_index < additional_info_length;
            additional_info_index++
        ) {
            var info = additional_info[additional_info_index];

            var $info = document.createElement('li');
//             $info.textContent = info;
            $info.innerHTML = info.replace(/\n/g, '<br>');

            Dom.node_push($additional_info, $info);
        }


        var $requirements = document.createElement('div');
        $requirements.classList.add('requirements');

        var $requirement = document.createElement('span');
        $requirement.classList.add('requirement');

        var $required_by_text = document.createElement('span');
        $required_by_text.classList.add('text');
        $required_by_text.textContent = 'Requires: ';

        Dom.node_push($requirement, $required_by_text);

        var running_price = 0;
        var requirements = item.requires;
        for (
            var requirement_index = 0, requirements_length = requirements.length;
            requirement_index < requirements_length;
            requirement_index++
        ) {
            var requirement = requirements[requirement_index];
            var count = requirement.count;
            var req_item = Items[requirement.id];


            var $req_item_icon = $icons[req_item.id].cloneNode(false);
            $req_item_icon.setAttribute('class', '');
            $req_item_icon.classList.add('small-icon');


            var $x = document.createElement('span');
            $x.classList.add('x');
            $x.textContent = ' ' + count + ' x';

            var $req_price = document.createElement('span');
            $req_price.classList.add('price');

            var price;
            if (item.id == req_item.id) {
                price = item.price - running_price;
            }
            else {
                running_price += count * req_item.price;
                price = req_item.price;
            }

            $req_price.textContent = '(' + price + ')';

            if (count > 1) {
                Dom.node_push($requirement, $x);
            }

            Dom.node_push($requirement,
                $req_item_icon, $req_price
            );

            Dom.node_push($requirements, $requirement);
        }


        var $required_by_list = document.createElement('div');
        $required_by_list.classList.add('requirements');

        var $required_by = document.createElement('span');
        $required_by.classList.add('required-by');

        var $required_by_text = document.createElement('span');
        $required_by_text.classList.add('text');
        $required_by_text.textContent = 'Required by: ';

        Dom.node_push($required_by, $required_by_text);

//         var running_price = 0;
        var required_by_list = item.required_by;
        for (
            var required_by_index = 0, required_by_list_length = required_by_list.length;
            required_by_index < required_by_list_length;
            required_by_index++
        ) {
            var required_by = required_by_list[required_by_index];
            var count = required_by.count;
            var req_by_item = Items[required_by.id];


            var $req_by_item_icon = $icons[req_by_item.id].cloneNode(false);
            $req_by_item_icon.setAttribute('class', '');
            $req_by_item_icon.classList.add('small-icon');


//             var $x = document.createElement('span');
//             $x.classList.add('x');
//             $x.textContent = ' ' + count + ' x';

            var $req_price = document.createElement('span');
            $req_price.classList.add('price');

            var price;
//             if (item.id == req_by_item.id) {
//                 price = item.price - running_price;
//             }
//             else {
//                 running_price += count * req_by_item.price;
                price = req_by_item.price;
//             }

            $req_price.textContent = '(' + price + ')';

//             if (count > 1) {
//                 Dom.node_push($required_by, $x);
//             }

            Dom.node_push($required_by,
                $req_by_item_icon,
                $req_price
            );

            Dom.node_push($required_by_list, $required_by);
        }


        var $description = document.createElement('div');
        $description.classList.add('description');
//         $description.textContent = item.description;
        $description.innerHTML = item.description.replace(/\n/g, '<br>');

        Dom.node_push($item,
//             $id,
            $name,
            $shop, $price,
            $additional_info,
            $requirements,
            $required_by_list,
            $description
        );

        $icons_render_cache[icon_id] = $item;
        Dom.node_push($stb, $item);
    }

    function icon_create(icon_id) {
        var $icon = document.createElement('div');
        $icon.classList.add('icon');

        $icon.id = icon_id;

        $icon.style.backgroundImage = icon_id_to_url(icon_id);

        return $icon;
    }

    function highlight_item_icon_and_its_requirements($icon, item) {
        var icon_id = +$icon.id;

        $icon.classList.add('highlight-self');

        var required_by_list = item.required_by;
        for (
            var required_by_index = 0, required_by_length = required_by_list.length;
            required_by_index < required_by_length;
            required_by_index++
        ) {
            var required_by = required_by_list[required_by_index];

            // Some items have themselvs as a requirement... sort of =)
            if (icon_id === required_by.id) { continue; }

            var $required_by_icon = $icons[required_by.id];
            $required_by_icon.classList.add('highlight-required-by');
        }

        var requirements = item.requires;
        for (
            var requirement_index = 0, requirements_length = requirements.length;
            requirement_index < requirements_length;
            requirement_index++
        ) {
            var requirement = requirements[requirement_index];

            // Some items have themselvs as a requirement... sort of =)
            if (icon_id === requirement.id) { continue; }

            var $requirement_icon = $icons[requirement.id];
            $requirement_icon.classList.add('highlight-requirement');
        }
    }

    function remove_highlights($icon, item) {
        var icon_id = $icon.id;

        $icon.classList.remove('highlight-self');

        var required_by_list = item.required_by;
        for (
            var required_by_index = 0, required_by_length = required_by_list.length;
            required_by_index < required_by_length;
            required_by_index++
        ) {
            var required_by = required_by_list[required_by_index];

            // Some items have themselvs as a requirement... sort of =)
            if (icon_id === required_by.id) { continue; }

            var $required_by_icon = $icons[required_by.id];
            $required_by_icon.classList.remove('highlight-required-by');
        }

        var requirements = item.requires;
        for (
            var requirement_index = 0, requirements_length = requirements.length;
            requirement_index < requirements_length;
            requirement_index++
        ) {
            var requirement = requirements[requirement_index];

            // Some items have themselvs as a requirement... sort of =)
            if (icon_id === requirement.id) { continue; }

            var $requirement_icon = $icons[requirement.id];
            $requirement_icon.classList.remove('highlight-requirement');
        }
    }

    function shop(name, $icons, columns_count) {
        var $shop = document.createElement('div');
        $shop.classList.add('shop');

        var $name = document.createElement('p');
        $name.classList.add('name');
        $name.textContent = name;

        var $items = document.createElement('table');
        $items.classList.add('items');

        var icons_count = $icons.length;
        var rows_count = Math.ceil(icons_count / columns_count);

        ROW:
        for (var row_number = 1; row_number <= rows_count; row_number++) {
            var $row = document.createElement('tr');
            $row.classList.add('row');

            COLUMN:
            for (var column_number = 1; column_number <= columns_count; column_number++) {
                var $column = document.createElement('td');
                $column.classList.add('column');

                var $icon = $icons[(row_number - 1) * columns_count + (column_number - 1)];
                Dom.node_push($column, $icon);

                Dom.node_push($row, $column);

                icons_count -= 1;
                if (icons_count < 1) { break COLUMN; }
            }

            Dom.node_push($items, $row);
            if (icons_count < 1) { break ROW; }
        }

        Dom.node_push($shop,
            $name,
            $items
        );

        return $shop;
    }

    function blank() {
        var $blank = document.createElement('span');
        return $blank;
    }

    function icon_id_to_url(id) {
        var result
            = 'url("demo/icons/'
            + str_repeat('0', 4 - (''+id).length) + id
            + '.jpg")'
            ;
        return result;
    }

    // [a, b]
    function random_int(a, b) {
        return Math.floor(a + Math.random() * (b - a + 1));
    }

    function str_repeat(str, n) {
        var result = '';

        for (var i = 1 ; i <= n; i++) {
            result += str;
        }

        return result;
    }

}}(Dom, Stb));