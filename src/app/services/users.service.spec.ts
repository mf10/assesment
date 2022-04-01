import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { User } from '../models/user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { environment } from 'src/environments/environment';

const usersMockData = [
          {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
        ];
describe('UsersService', () => {
  let usersService: UsersService;
  let httpController: HttpTestingController;
  const userData = environment.usersData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        UsersService
      ],
    });
    usersService = TestBed.inject(UsersService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call getusers and return an array of users', () => {

    // 1
    usersService.getUsers().subscribe((users: User[]) => {
                expect(users.length).toBe(2);
              });

    //3
    const req = httpController.expectOne({
      method: 'GET',
      url: `${userData}/usersMockResposne.json`,
    });

    //4
    req.flush(usersMockData);
    httpController.verify();
  });
})
