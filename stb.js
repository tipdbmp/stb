var Stb = (function() {
    'use strict';

    var _slice = [].slice;

    // We add a mousemove event to the global window object rather than
    // on the specific nodes (icons, etc.) because when we show the $stb node
    // and we position it such that it's top left corner is at the mouse cursor's
    // position and we drag diagonally to the bottom right corner the mouse would
    // overlap with the stb's node and would trigger the icon's mouseout event and
    // assuming it hides the stb node the stb would become hidden but we are still
    // moving the mouse over the icon so it will become visible again and if the
    // mouse is still moving it will become hidden again, etc... i.e the stb node
    // will flicker.
    window.addEventListener('mousemove', on_mouse_move, /* use-capture */ true);

    // TODO: when $stb can't fit on the screen consider moving it?

    var $html;
    var $body;
    window.addEventListener('load', function() {
         $html = document.body.parentNode;
         $body = document.body;
    })


    var $stb = document.createElement('div');
    $stb.classList.add('semitransparent-blackness', 'stb-hide');
    var is_visible = false;

    function get_node() { return $stb; }

    function show()     { $stb.classList.remove('stb-hide'); is_visible = true;  }
    function hide()     { $stb.classList.add('stb-hide');    is_visible = false; }

    function clear() {
//         Dom.node_remove_all_children($stb);
        while ($stb.firstChild) { $stb.removeChild($stb.firstChild); }

        _slice.call($stb.classList).forEach(function(class_name) {
            $stb.classList.remove(class_name);
        });

        $stb.classList.add('semitransparent-blackness');
        if (!is_visible) { $stb.classList.add('stb-hide'); }
    }


    var classes = [];
    var on_hover_in_handler_for = {};
    var on_hover_out_handler_for = {};

    function register_class(class_name, on_hover_in, on_hover_out) {
        classes.push(class_name);
        on_hover_in_handler_for[class_name] = on_hover_in;
        on_hover_out_handler_for[class_name] = on_hover_out;
    }

    function call_on_hover_in_handler($node, class_name) {
        clear();
        on_hover_in_handler_for[class_name]($node, $stb);
    }
    function call_on_hover_out_handler($node, class_name) {
        if (on_hover_out_handler_for[class_name] != undefined) {
            on_hover_out_handler_for[class_name]($node, $stb);
        }
    }

    var $prev_target;
    var prev_target_class_name;

    function on_mouse_move(event) {
        var $target = event.target;
        var class_name;

        if ($target === $body || $target === $html) {
            hide();
            return;
        }

        var mousing_over_registered_class = false;

        for (
            var class_index = 0, classes_length = classes.length;
            class_index < classes_length;
            class_index++
        ) {
            class_name = classes[class_index];

            if ($target.classList.contains(class_name)) {
                call_on_hover_out_handler($prev_target, prev_target_class_name)

                $prev_target = $target;
                prev_target_class_name = class_name;
                mousing_over_registered_class = true;

                show();

                var x = event.clientX;
                var y = event.clientY;
                set_position($stb, x, y);

                call_on_hover_in_handler($target, class_name);

                break;
            }
        }

        if (!mousing_over_registered_class) {
            // remove $target === $stb &&  to show stb when it's hovering over
            // a text inside the $target
            if ($target === $stb && is_mouse_inside_node(event, $prev_target)) {
                show();

                var x = event.clientX;
                var y = event.clientY;
                set_position($stb, x, y);

                call_on_hover_in_handler($prev_target, prev_target_class_name)
            }
            else {
                hide();
            }
        }
    }

    function set_position($stb, x, y) {
        // assume $stb.style.position === 'fixed'
        $stb.style.left = x + 'px';
        $stb.style.top  = y + 'px';
    }

    function is_mouse_inside_node(mouse_event, $node) {
        var rect = $node.getBoundingClientRect();
        var node_x = rect.left;
        var node_y = rect.top;

        var node_width = $node.clientWidth;
        var node_height = $node.clientHeight;

//         var style     = $node.style;
        var style     = getComputedStyle($node);
        var bw_top    = parseFloat(style.borderTopWidth);
        var bw_right  = parseFloat(style.borderRightWidth);
        var bw_bottom = parseFloat(style.borderBottomWidth);
        var bw_left   = parseFloat(style.borderLeftWidth);

        var min_x = node_x - bw_left;
        var max_x = node_x + node_width + bw_right;
        var min_y = node_y - bw_top;
        var max_y = node_y + node_height + bw_bottom;

        var mx = mouse_event.clientX;
        var my = mouse_event.clientY;

        if ( (min_x <= mx && mx <= max_x)
          && (min_y <= my && my <= max_y) ) {
            return true;
        }

        return false;
    }

    return {
        get_node: get_node,
//         show:     show,
//         hide:     hide,
//         clear:    clear,
        register_class: register_class,
    };
}());
