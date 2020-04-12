import React from "react";
import styled from "styled-components";
import FoodItem from "./FoodItem";

const Title = styled.h3`
  font-size: 75px;
  margin: 0;
  margin-top: 150px;
  text-align: center;
`;

const CategoryTitle = styled.h4`
  font-size: 45px;
  margin-left: 100px;
  color: #83543e;
`;

const CategoryGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 280px));
  grid-column-gap: 20px;
  width: 85%;
  margin: 0 auto;
`;

const Food = () => {
  return (
    <>
      <Title>Menú</Title>
      <section>
        <CategoryTitle>Alimentos</CategoryTitle>
        <CategoryGallery>
          <FoodItem src="bagel.jpg" description="Bagels">
            <ul>
              <li>Pechuga</li>
              <li>Pepperoni</li>
              <li>Tres quesos.</li>
              <li>Jamón de pavo.</li>
              <li>Salchicha</li>
              <li>Especial: carne de res, pimientos, queso Oaxaca y piña.</li>
              <li>Axkan: Pierna española, chorizo y salchicha</li>
              <li>Atún al chipotle.</li>
              <li>
                Gourmet: Jamón serrano con queso de cabra y mermelada de higos.
              </li>
            </ul>
          </FoodItem>
          <FoodItem src="chicken_bake.jpg" description="Chicken Bake">
            <p>Pechuga de pollo con tres quesos y aderezos. </p>
          </FoodItem>
          <FoodItem src="bagel.jpg" description="Cuernitos">
            <ul>
              <li>Tres quesos</li>
              <li>Jamón</li>
            </ul>
          </FoodItem>
        </CategoryGallery>
      </section>
      <section>
        <CategoryTitle>Bebidas</CategoryTitle>
        <CategoryGallery>
          <FoodItem src="soda_italiana.jpg" description="Soda Italiana" />
          <FoodItem src="late.jpg" description="Café">
            <ul>
              <li>Café Cappuccino: Clásico y sabores</li>
              <li>Café Latte.</li>
              <li>Moca</li>
              <li>Café Flat White</li>
            </ul>
          </FoodItem>
          <FoodItem src="cafe_frappe.jpg" description="Frappé" />
          <FoodItem
            src="cafe_oaxaca.jpg"
            description="Café americano de Chiapas"
          />
          <FoodItem
            src="capuccino.jpg"
            description="Chocolate Axkan  con bombones"
          />
          <FoodItem
            src="chocolate.jpg"
            description="Chocoate Artesanal de Oaxaca"
          />
           <FoodItem
            src="late_frio.jpg"
            description="Chai Latte Frío y caliente."
          />
        </CategoryGallery>
      </section>
      <section>
        <CategoryTitle>Postres</CategoryTitle>
        <CategoryGallery>
          <FoodItem src="lemon.png" description="Pay de limón" />
          <FoodItem src="chesse_cake.jpg" description="Cheesecake" />
          <FoodItem
            src="chocolate_cake.jpg"
            description="Pastel de doble chocolate."
          />
          <FoodItem src="cookie_2.jpg" description="Chicken">
            <ul>
              <li>Chocolate oscuro</li>
              <li>Chocolate Blanco</li>
              <li>Avena con arándanos</li>
            </ul>
          </FoodItem>
          <FoodItem src="crepas.png" description="Crepas dulces y saladas" />
          <FoodItem src="Donuts.jpg" description="Donas" />
          <FoodItem src="wafles.jpg" description="Waffles" />
          <FoodItem src="paletas_magnum.jpg" description="Paletas Magnum" />
          <FoodItem src="macarrones.jpg" description="Macarrones franceses" />
        </CategoryGallery>
      </section>
    </>
  );
};

export default Food;
