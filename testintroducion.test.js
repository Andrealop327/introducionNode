const sumar =require('./funciones');

test("Prueba función", ()=>{
      // para numeros reales si se quiere un numero exacto
      expect(sumar(3,5)).toBe(8);

         // para numeros reales si se quiere un número 
         //let resultado=  sumar(3.01, 5.8);
         //  expect(sumar(3,5)).toBeCloseTo(8.81);    en este caso el resulado es mayor a 8.81  con  
                //toBeCloseTo mostrara los valores redondeados             

}
); 
//resultado redondeado
test("Prueba función", ()=>{
    let resultado=  sumar(3.01, 5.8);
    expect(resultado).toBeGreaterThan(8);
});
// resultado igual o menor
test("Prueba función", ()=>{
    let resultado=  sumar(3.01, 5.7);
    expect(resultado).toBeGreaterThanOrEqual(8);
});
//resultado menor que 10
test("Prueba función", ()=>{
    let resultado=  sumar(3.01, 5.9);
    expect(resultado).toBeLessThan(10);
});

