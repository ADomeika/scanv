import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'links'
})
export class LinksPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 0) {
      const linksArray = value.split(' ');
      let linksHTML = '';
      if (linksArray.length > 0) {
        linksArray.forEach((link) => {
          if (link.length > 1) {
            linksHTML += `
              <a
                href="${link}"
                target="_blank"
                class="list-group-item list-group-item-action"
              >${link}</a>
            `;
          }
        })
        return linksHTML;
      }
    }
    return null;
  }
}
