// Characters to be escaped [.*+?^${}()|[\]\\] 

function search(){
    let textToSearch = document.getElementById("text-to-search").value;
    let paragraph = document.getElementById("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
}
// معالجة الأحرف الخاصة في النص المدخل
// javascript
// textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// هذه السطر يستخدم تعبيرًا نمطيًا (RegExp) لاستبدال أي من الأحرف الخاصة في النص المدخل برموز الهروب الخاصة بها. الأحرف الخاصة التي يتم التعامل معها هي: [.*+?^${}()|[\]\\].

// []: مجموعة الأحرف التي سيتم البحث عنها.
// .*+?^${}()|[\]\\: هذه الأحرف لها معاني خاصة في التعابير النمطية ويجب "الهروب" منها لجعلها تُفسر كأحرف عادية.
// g: علم البحث العالمي (global) الذي يجعل البحث يتم في كامل النص المدخل.
// "\\$&": هذا النص يشير إلى أنه سيتم استبدال كل حرف خاص بالرمز الهروبي الخاص به. & يمثل الحرف المطابق.
// إنشاء تعبير نمطي (RegExp)
// javascript
// let pattern = new RegExp(`${textToSearch}`, "gi");
// نقوم بإنشاء تعبير نمطي جديد باستخدام النص المدخل، مع العلمين g (global) وi (case-insensitive) لجعل البحث يشمل كل المطابقات بغض النظر عن حالة الأحرف.

// استبدال النص المطابق بنص مظلل
// javascript
// paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
// paragraph.textContent: نحصل على النص داخل الفقرة.
// replace(pattern, match => <mark>${match}</mark>):: نقوم باستبدال كل تطابق للتعبير النمطي بنص مظلل باستخدام عنصر <mark>.
// match: هو النص المطابق الذي تم العثور عليه.
// <mark>${match}</mark>: نحيط النص المطابق بعنصر <mark> لإبراز النص.
