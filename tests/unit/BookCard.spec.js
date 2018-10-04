import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BookCard from '@/components/BookCard.vue';

describe('BookCard.vue', () => {
  const wrapper = shallowMount(BookCard, {
    propsData: {
      book: {
        title: 'keyboard cat',
        PublishDate: '1975',
        purchaseLink: 'amazon.com',
        imageUrl: 'amazon',
      },
      authorInfo: {
        author: 'Eric',
        birthday: 'September 13, 1916',
        birthPlace: 'Merica',
      },
    },
  });
  it('renders a div with class book-card and title', () => {
    expect(wrapper.is(BookCard)).equal(true);
    expect(wrapper.is('div')).to.equal(true);
    expect(wrapper.contains('h3')).to.equal(true);
  });
  it('has a link', () => {
    expect(wrapper.contains('a')).to.equal(true);
  });
  it('has title', () => {
    expect(wrapper.text()).to.include('keyboard cat');
  });
});
