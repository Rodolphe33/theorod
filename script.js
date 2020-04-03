// hide
$(document).ready(function() {
    
    // voilà, ici c'est le déclencheur, l'élément HTML sur lequel tu appliques un event, donc un clic de souris
    $('#id1').click(function() { // attention à l'ID entre parenthèse, il doit s'agir d'un div ou une balise titre SEUL, sans enfant.
       
        // ici c'est la méthode que tu appliques sur ton event (un clic de souris déclenche un menu toggle)
        $("#cache").slideToggle(); // ton ID cache doit être une balise parente, elle contient des balises enfants avec les contenus de ton intervention
        
    });
});

$(document).ready(function() {
    $("#id2").click(function() {
        $("#cache").slideToggle();
    });
});


// show
$(document).ready(function() {
    $('#id1').click(function() {
        $('.hide').slideToggle(1000); // ici, tu n'as pas besoin du 1000, le slideToggle génère déjà une fluidité dans l'animation =)
    });
});
$(document).ready(function() {
    $('#line2').click(function() {
        $('').hide(1000); // ici tu n'as pas d'élément déclaré dans ta variable $... donc il n'y a rien à cacher
    });
});
$(document).ready(function() {
    $('#line3').click(function() {
        $('').hide(1000); // ici tu n'as pas d'élément déclaré dans ta variable $... donc il n'y a rien à cacher
    });
});

$(document).ready(function() {
    $('#line4').click(function() {
        $('').show(1000); // ici tu n'as pas d'élément déclaré dans ta variable $... donc il n'y a rien à cacher
    });
});




var data = [{
        id: 1,
        sujet: '404',
        date: 01 / 04 / 2020,
        nom: 'KEVIN',
        info: 'The one',
        codecou: ''
    },
    {
        id: 2,
        sujet: '200',
        date: 02 / 04 / 2020,
        nom: 'Kévin',
        info: 'Beau gosse',
        codecou: ''
    },
    {
        id: 3,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 4,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 5,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 6,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 7,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 8,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 9,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 10,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 11,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 12,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 13,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 14,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 15,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
    {
        id: 16,
        sujet: 'Ervin Howell',
        info: 'Antonette',
        date: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
        nom: '',
        codecou: ''
    },
];
