// Guardo en variables los elementos a emplear del HTML
const btnInfo = document.querySelectorAll('.btn-info');


// Le paso una función a cada botón de los cards de los productos
btnInfo.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
  const previewInfoWindow = document.createElement('div');
  previewInfoWindow.className = "inline-block fixed min-h-[100vh] w-full mx-auto align-middle";
  previewInfoWindow.innerHTML = `
  <div class="products-preview fixed min-h-[100vh] w-full flex align-middle justify-center">
    <div class="relative" data-target="p-1">
      <div class="border-2 border-[#706353] border-opacity-60 rounded-lg overflow-hidden text-center p-4 w-fit">
        <h2 class="text-xl text-gray-900 dark:text-white font-medium title-font mb-4">Información nutricional</h2>
        <p class="leading-relaxed text-base dark:text-gray-400">Tamaño de la porción: 1 cucharada sopera (20gr)
        </p>
        <table
          class="w-auto text-sm text-left text-gray-500 dark:text-gray-400 bg-white dark:bg-[#0C0701] mx-auto my-4">
          <thead
            class="text-xs text-gray-700 uppercase bg-white dark:bg-[#0C0701] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3 text-[#2A2620] dark:text-[#AFA698] text-xs font-medium title-font">
                Cantidad por porción</th>
              <th scope="col" class="px-6 py-3 text-[#2A2620] dark:text-[#AFA698] text-xs font-medium title-font">
                % VD (*)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Valor
                energético</th>
              <td class="px-6 py-4">65 Kcal = 272kJ</td>
              <td class="px-6 py-4">3</td>
            </tr>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Carbohidratos</th>
              <td class="px-6 py-4">12 g</td>
              <td class="px-6 py-4">4</td>
            </tr>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Proteínas</th>
              <td class="px-6 py-4">1.3 g</td>
              <td class="px-6 py-4">2</td>
            </tr>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Grasas totales</th>
              <td class="px-6 py-4">1.3 g</td>
              <td class="px-6 py-4">2</td>
            </tr>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Grasas saturadas</th>
              <td class="px-6 py-4">0.8 g</td>
              <td class="px-6 py-4">4</td>
            </tr>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Grasas trans</th>
              <td class="px-6 py-4">0 g</td>
              <td class="px-6 py-4">-</td>
            </tr>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Fibra
                alimentaria</th>
              <td class="px-6 py-4">0 g</td>
              <td class="px-6 py-4">0</td>
            </tr>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> Sodio
              </th>
              <td class="px-6 py-4">30 mg</td>
              <td class="px-6 py-4">1</td>
            </tr>
            <tr class="bg-white dark:bg-[#0C0701] border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Calcio</th>
              <td class="px-6 py-4">56 mg</td>
              <td class="px-6 py-4">6</td>
            </tr>
          </tbody>
        </table>
        <p class="leading-relaxed text-base dark:text-gray-400">% Valores Diarios con base a una dieta de 2000
          kcal u 8400 kJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades
          energéticas.</p>
      </div>
    </div>
  </div>
  `;
})
})
