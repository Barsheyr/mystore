import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { faker } from "@faker-js/faker";
import CheckboxInput from "@/components/form/CheckBoxInput";

function CreateProduct() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  // const description = faker.commerce.productDescription();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />

          {/* New category select dropdown */}
          <div className="mt-4">
            <label htmlFor="category" className="block font-semibold mb-2">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>

          <SubmitButton text="Create Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProduct;
