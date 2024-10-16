import './Style.css';
import React, { Component } from 'react'

export default class SectionWhoWe extends Component {
  render() {
    return (
      <section id="WhoWe" mypage="WhoWe" className="WhoWe">
       <h2> من نحن</h2>
        <p>
        نحن فخورون بأن نكون هنا على صفحة الويب لمطعم حلب، والذي تأسس عام 2013. مهمتنا هي تقديم تجربة مذهلة لعملائنا عبر تقديم أفضل المشاوي والأطباق اللذيذة. رؤيتنا هي أن نصبح وجهة الاختيار لعشاق المأكولات الشهية والمشاوي في المنطقة
        نحن ملتزمون بتقديم تجربة طعام فريدة ولذيذة لعملائنا وبناء علاقات دائمة معهم شكرًا لكم على دعمكم المستمر لمطعم حلب، ونتطلع دائمًا لخدمتكم بأفضل ما لدينا.
        </p>
            
        <ul>
          <li>أهدافنا تتضمن</li>
          <li>تقديم أعلى جودة في الأطعمة والخدمة لضمان رضا العملاء.</li>
          <li>الابتكار والتطوير المستمر لقائمة الطعام لنقدم دائمًا تجربة جديدة ومميزة.</li>
          <li>الاهتمام بصحة العملاء من خلال تقديم وجبات صحية ومغذية.</li>
          <li>بناء علاقات قوية مع مجتمعنا المحلي والمشاركة في الفعاليات والأنشطة الاجتماعية.</li>
          <li>توفير بيئة دافئة ومريحة لعملائنا للاستمتاع بوجبتهم.</li>
        </ul>
      </section>
    )
  }
}

